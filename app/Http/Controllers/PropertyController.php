<?php
namespace App\Http\Controllers;

use App\Models\Property;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::all();
        return view('property/index', ['properties' => $properties]);
    }

    public function detail($id)
    {
        $properties = Property::find($id);

        return view('property/detail', ['properties' => $properties]);
    }
}