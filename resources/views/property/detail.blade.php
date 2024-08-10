@extends('layout')

@section('content')
<!-- About Start -->
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="about-img position-relative overflow-hidden p-5 pe-0">
                    <img class="img-fluid w-100" src="{{ Storage::url('property/'. $properties->gambar) }}">
                </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 class="mb-4">{{ $properties->nama }}</h1>
                <h3 class="mb-4">Rp {{ number_format($properties->harga) }}</h3>
                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{$properties->alamat}},
                    {{$properties->lokasi}}</p>
                <p><i class="fa fa-check text-primary me-3"></i>{{ $properties->tipe }}</p>
                <p><i class="fa fa-check text-primary me-3"></i>Luas Tanah {{$properties->luas_tanah}} m2</p>
                <p><i class="fa fa-check text-primary me-3"></i>Luas Bangunan {{$properties->luas_bangunan}} m2</p>
                <p><i class="fa fa-check text-primary me-3"></i>Listrik {{$properties->listrik}} Watt</p>
                <a class="btn btn-primary py-3 px-5 mt-3" href="/property">Back</a>
                <a class="btn btn-primary py-3 px-5 mt-3" href="https://wa.me/6289682591786"><i
                        class="fab fa-whatsapp text-white"></i> Whatsapp</a>
            </div>
        </div>
    </div>
</div>
<!-- About End -->
@endsection