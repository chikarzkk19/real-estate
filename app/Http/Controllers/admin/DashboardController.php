<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{

    public function index()
    {
        return view('admin.dashboard.index');
    }

    public function viewlogin()
    {
        return view('admin.dashboard.viewlogin');
    }

     // Proses login
    public function login(Request $request)
    {
        // Validasi input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Ambil kredensial
        $credentials = $request->only('email', 'password');

        // Cek apakah kredensial valid
        if (Auth::attempt($credentials)) {
            // Jika autentikasi berhasil, redirect ke halaman dashboard
            return redirect()->intended('/admin');
        }

        // Jika login gagal
        return redirect()->back()->withErrors([
            'email' => 'Email atau password salah.',
        ]);
    }

     // Proses logout
    public function logout()
    {
        // Auth::logout();
        return redirect('/admin/login');
    }
}
