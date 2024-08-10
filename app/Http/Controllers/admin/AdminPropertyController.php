<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminPropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $properties = Property::all();
        return view('admin.property.index', ['properties' => $properties]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Handle file upload for 'gambar'
            $gambar = null;
            if ($request->hasFile('gambar')) {
                $gambar = $this->uploadFile($request->file('gambar'), 'public/property');
            }

            // Start a database transaction
            DB::beginTransaction();

            // Create Property instance
            $property = new Property([
                'nama' => $request->nama,
                'alamat' => $request->alamat,
                'lokasi' => $request->lokasi,
                'tipe' => $request->tipe,
                'luas_tanah' => $request->luas_tanah,
                'luas_bangunan' => $request->luas_bangunan,
                'listrik' => $request->listrik,
                'sertifikat' => $request->sertifikat,
                'kamar_tidur' => $request->kamar_tidur,
                'kamar_tidur' => $request->kamar_tidur,
                'kamar_mandi' => $request->kamar_mandi,
                'harga' => $request->harga,
                'gambar' => $gambar,
            ]);

            // Save Property
            if (!$property->save()) {
                throw new \Exception('Failed to save Property');
            }

            // Handle 'virtual_tour' ZIP file upload and extraction
            if ($request->hasFile('virtual_tour')) {
                $this->extractUploadedZip($request->file('virtual_tour'), $property->id, $property->nama);
            }

            // Commit the transaction
            DB::commit();
            // Property created successfully
            return redirect()->route('property.index')->with('success', 'Properti berhasil ditambahkan');

        } catch (\Throwable $th) {
            // Log and handle exceptions
            DB::rollback();
            Log::error('Exception in store method: ' . $th->getMessage());
            return redirect()->route('property.index')->with('error', 'Properti gagal ditambahkan');
        }
    }

    // Helper method to handle file upload and return file name
    private function uploadFile($file, $storagePath)
    {
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs($storagePath, $fileName);
        return $fileName;
    }

    public function extractUploadedZip($uploadedFile, $property_id, $property_nama)
    {
        try {
            // Move the uploaded file to storage/app/public directory
            $zipFileName = 'O3DVista.zip';
            // Store the uploaded file in the public disk under a folder specific to the property_id
            $storagePath = 'public/extracted/zipvista-' . $property_id;
            $storedFilePath = $uploadedFile->storeAs($storagePath, $zipFileName);

            // Path to the ZIP file
            $zipPath = storage_path('app/' . $storedFilePath);

            // Destination path where the ZIP file will be extracted
            $extractPath = public_path('3dvista-extracted/extracted-' . $property_id);

            // Ensure the destination directory exists
            if (!file_exists($extractPath)) {
                mkdir($extractPath, 0755, true);
            }

            // Open the ZIP file
            $zip = new \ZipArchive;
            if ($zip->open($zipPath) === true) {
                // Extract all files from the ZIP file to the destination directory
                $extractResult = $zip->extractTo($extractPath);

                // Close the ZIP archive
                $zip->close();

                if ($extractResult) {
                    // Destination file path for index.htm
                    $destinationIndexFile = resource_path('views/virtual-tour/view-' . $property_id . '/index.blade.php');

                    // Ensure the directory exists for the destination index file
                    $indexDir = dirname($destinationIndexFile);
                    if (!file_exists($indexDir)) {
                        mkdir($indexDir, 0755, true);
                    }

                    // Source path for index.htm within the extracted directory
                    $sourceIndexFile = $extractPath . '/O3DVista/index.htm';
                    if (file_exists($sourceIndexFile)) {

                        // Move the index.htm file to the destination
                        if (rename($sourceIndexFile, $destinationIndexFile)) {
                            // Read contents of index.blade.php
                            $indexContent = file_get_contents($destinationIndexFile);

                            // Perform replacement in index.blade.php content
                            $adjustedContent = str_replace('<link rel="preload" href="', '<link rel="preload" href="/3dvista-extracted/extracted-' . $property_id . '/O3DVista/', $indexContent);
                            $adjustedContent = str_replace('<script src="', '<script src="/3dvista-extracted/extracted-' . $property_id . '/O3DVista/', $adjustedContent);
                            $adjustedContent = str_replace("settings.set(TDV.PlayerSettings.SCRIPT_URL, '", "settings.set(TDV.PlayerSettings.SCRIPT_URL, '/3dvista-extracted/extracted-" . $property_id . "/O3DVista/", $adjustedContent);
                            $adjustedContent = str_replace("settings.set(settings.set(TDV.PlayerSettings.WEBVR_POLYFILL_URL, '", "settings.set(settings.set(TDV.PlayerSettings.WEBVR_POLYFILL_URL, '/3dvista-extracted/extracted-" . $property_id . "/O3DVista/", $adjustedContent);
                            $adjustedContent = str_replace("settings.set(TDV.PlayerSettings.HLS_URL, '", "settings.set(TDV.PlayerSettings.HLS_URL, '/3dvista-extracted/extracted-" . $property_id . "/O3DVista/", $adjustedContent);

                            // Write adjusted content back to index.blade.php
                            file_put_contents($destinationIndexFile, $adjustedContent);

                            // Return success response if file moved successfully
                            return redirect()->route('property.index')->with('success', 'ZIP file extracted and file moved successfully');
                        } else {
                            throw new \Exception('Failed to move index.htm file');
                        }
                    } else {
                        throw new \Exception('index.htm file not found in ZIP archive');
                    }
                } else {
                    throw new \Exception('Failed to extract ZIP file');
                }
            } else {
                // Failed to open ZIP archive
                print_r('Failed to open ZIP archive');
                throw new \Exception('Failed to open ZIP archive');
            }

        } catch (\Throwable $th) {
            // Log the exception for further investigation
            Log::error('Exception in extractUploadedZip method: ' . $th->getMessage());

            // Return error response
            return redirect()->route('property.index')->with('error', 'Failed to extract ZIP file: ' . $th->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $property = Property::find($id);
        $property->nama = $request->nama;
        $property->alamat = $request->alamat;
        $property->lokasi = $request->lokasi;
        $property->tipe = $request->tipe;
        $property->luas_tanah = $request->luas_tanah;
        $property->luas_bangunan = $request->luas_bangunan;
        $property->listrik = $request->listrik;
        $property->sertifikat = $request->sertifikat;
        $property->kamar_tidur = $request->kamar_tidur;
        $property->kamar_tidur = $request->kamar_tidur;
        $property->kamar_mandi = $request->kamar_mandi;
        $property->harga = $request->harga;

        // Save Property
        if (!$property->save()) {
            throw new \Exception('Failed to save Property');
        }

        return redirect()->route('property.index')->with('success', 'Data berhasil diperbahario');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        try {
            $property = Property::find($id);

            $property->delete();
            return redirect()->route('property.index')->with('success', 'Berhasil hapus data');

        } catch (\Throwable $th) {
            return redirect()->route('property.index')->with('error', 'Gagal hapus data: ' . $th->getMessage());
        }

    }
}