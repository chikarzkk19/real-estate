<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ZanySoft\Zip\Zip;

class ZipController extends Controller
{
    function zipUploadForm(Request $request){
         
        return view("unzip");
    }
    public function extractUploadedZip(Request $request)
    {
        try {
            // Retrieve the uploaded file from the request
            if ($request->hasFile('zip_file')) {
                $uploadedFile = $request->file('zip_file');

                // Move the uploaded file to storage/app/public directory
                $uploadedFile->move(storage_path('app/public'), 'O3DVista.zip');

                // Path to the ZIP file
                $zipPath = storage_path('app/public/O3DVista.zip');

                // Destination path where the ZIP file will be extracted
                $extractPath = public_path('extracted');

                // Check if the ZIP file exists
                if (!file_exists($zipPath)) {
                    return response()->json(['message' => 'ZIP file does not exist'], 404);
                }

                // Ensure the destination directory exists
                if (!is_dir($extractPath)) {
                    mkdir($extractPath, 0755, true);
                }

                // Create an instance of Zip
                $zip = new Zip();

                // Open the ZIP file
                $zip->open($zipPath);

                // Extract the ZIP file
                $zip->extract($extractPath);

                // Close the Zip instance
                $zip->close();

                // Return success response
                return response()->json(['message' => 'ZIP file extracted successfully'], 200);
            } else {
                return response()->json(['message' => 'No ZIP file uploaded'], 400);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to extract ZIP file', 'error' => $e->getMessage()], 500);
        }
    }
}