<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;

class VirtualTourController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        return view('virtual-tour.view-' . $id . '.index', ['id' => $id]);
    }
}