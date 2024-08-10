<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'alamat',
        'lokasi',
        'tipe',
        'luas_tanah',
        'luas_bangunan',
        'listrik',
        'sertifikat',
        'kamar_tidur',
        'kamar_mandi',
        'gambar',
        'virtual_tour',
        'harga',
    ];
}
