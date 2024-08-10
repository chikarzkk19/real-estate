@extends('layout')

@section('content')
<!-- Search Start -->
<div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
    <div class="container">
        <div class="row g-2">
            <div class="col-md-10">
                <div class="row g-2">
                    <div class="col-md-4">
                        <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword">
                    </div>
                    <div class="col-md-4">
                        <select class="form-select border-0 py-3">
                            <option selected>Property Type</option>
                            <option value="1">Rumah</option>
                            <option value="2">Apartment</option>
                            <option value="3">Ruko</option>
                            <option value="3">Tanah Kavling</option>
                            <option value="3">Gudang</option>
                            <option value="3">Kost</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select class="form-select border-0 py-3">
                            <option selected>Location</option>
                            <option value="1">Jakarta</option>
                            <option value="2">Bandung</option>
                            <option value="3">Bekasi</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <button class="btn btn-dark border-0 w-100 py-3">Search</button>
            </div>
        </div>
    </div>
</div>
<!-- Search End -->


<!-- Property List Start -->
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
                <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                    <h1 class="mb-3">Property</h1>
                    <p>Jelajahi tur virtual kami untuk melihat properti kami secara langsung. Dapatkan pengalaman interaktif yang mendalam dan temukan setiap sudut dari properti impian Anda sebelum Anda bahkan berkunjung secara fisik.</p>
                </div>
            </div>

        </div>
        <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                    @foreach ($properties as $property)

                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="property-item rounded overflow-hidden">
                            <div class="position-relative overflow-hidden"
                                style="width: 100%;height: 250px !important;">
                                <a href="/property/{{ $property->id }}"><img class="img-fluid"
                                        src="{{ Storage::url('property/'. $property->gambar) }}" alt="" width="100%"
                                        height="100%" style="width: 100%; height: 100%;"></a>
                                <div
                                    class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                                    For Sell</div>
                                <div
                                    class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                    {{ $property->tipe }}</div>
                            </div>
                            <div class="p-4 pb-0">
                                <h5 class="text-primary mb-3">Rp {{ number_format($property->harga) }}</h5>
                                <a class="d-block h5 mb-2"
                                    href="/property/{{ $property->id }}">{{ $property->nama }}</a>
                                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>{{ $property->alamat }},
                                    {{ $property->lokasi }}</p>
                            </div>
                            <div class="d-flex border-top">
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-ruler-combined text-primary me-2"></i>{{ $property->luas_tanah }}
                                    m<sup>2</sup></small>
                                <small class="flex-fill text-center border-end py-2"><i
                                        class="fa fa-bed text-primary me-2"></i>{{ $property->kamar_tidur }}</small>
                                <small class="flex-fill text-center py-2"><i
                                        class="fa fa-bath text-primary me-2"></i>{{ $property->kamar_mandi }}</small>
                            </div>
                            <div class="d-flex border-top">
                                <a href="virtual-tour/{{ $property->id }}"
                                    class="flex-fill text-center border-bottom py-2"><i
                                        class="fa fa-vr-cardboard text-primary me-2"></i>Virtual Tour</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Property List End -->


@endsection
