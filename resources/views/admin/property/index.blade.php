@extends('admin/template/layout')

@section('title', 'Admin Dashboard')

@section('vendor-style')
<link rel="stylesheet" href="{{asset('assets/vendor/libs/apex-charts/apex-charts.css')}}">
@endsection

@section('vendor-script')
<script src="{{asset('assets/vendor/libs/apex-charts/apexcharts.js')}}"></script>
@endsection

@section('page-script')
<script src="{{asset('assets/js/dashboards-analytics.js')}}"></script>
@endsection

@section('content')
<div class="row">
    <div class="col-md-12 mb-4 order-0">
        <div class="card p-3">
            <div class="my-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAddProperty">
                    Tambah Data
                </button>
            </div>
            <div class="table-responsive text-nowrap">
                <table class="table" id="property">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Alamat</th>
                            <th>Lokasi</th>
                            <th>Tipe</th>
                            <th>Luas Tanah</th>
                            <th>Luas Bangunan</th>
                            <th>Listrik</th>
                            <th>Sertifikat</th>
                            <th>Kamar Tidur</th>
                            <th>Kamar Mandi</th>
                            <th>Gambar</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                        @foreach($properties as $property)
                        <tr>
                            <td>{{ $property->nama }}</td>
                            <td>{{ $property->alamat }}</td>
                            <td>{{ $property->lokasi }}</td>
                            <td>{{ $property->tipe }}</td>
                            <td>{{ $property->luas_tanah }} m<sup>2</sup></td>
                            <td>{{ $property->luas_bangunan }} m<sup>2</sup></td>
                            <td>{{ $property->listrik }} watt</td>
                            <td>{{ $property->sertifikat }}</td>
                            <td>{{ $property->kamar_tidur }}</td>
                            <td>{{ $property->kamar_mandi }}</td>
                            <td><img src="{{ Storage::url('property/'. $property->gambar) }}" alt="Property Image"
                                    width="50" height="50">
                            </td>
                            <td>
                                <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>

                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#modalEditProperty{{ $property->id }}">
                                            <i class="bx bx-edit-alt me-1"></i> Edit
                                        </a>

                                        <form action="{{ url('/admin/property', ['id' => $property->id]) }}"
                                            method="POST" style="display: none;" id="delete-form-{{ $property->id }}">
                                            @csrf
                                            @method('DELETE')
                                        </form>
                                        <a href="javascript:void(0);" class="dropdown-item"
                                            onclick="document.getElementById('delete-form-{{ $property->id }}').submit();">
                                            <i class="bx bx-trash me-1"></i> Delete
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <div class="modal fade" id="modalEditProperty{{ $property->id }}" tabindex="-1"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <form method="POST" action="{{ url('admin/property/'. $property->id) }}"
                                    enctype="multipart/form-data">
                                    @csrf
                                    @method('PUT')
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel1">Edit Property</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-6 mb-3">
                                                    <label for="nama" class="form-label">Nama</label>
                                                    <input type="text" id="nama" class="form-control"
                                                        placeholder="Masukkan Nama" name="nama"
                                                        value="{{ $property->nama }}" required>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <label for="alamat" class="form-label">Alamat</label>
                                                    <input type="text" id="alamat" class="form-control"
                                                        placeholder="Masukkan Alamat" name="alamat"
                                                        value="{{ $property->alamat }}" required>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mb-3">
                                                    <label for="lokasi" class="form-label">Lokasi</label>
                                                    <input type="text" id="lokasi" class="form-control"
                                                        placeholder="Masukkan Lokasi" name="lokasi"
                                                        value="{{ $property->lokasi }}" required>
                                                </div>
                                                <div class="col mb-3">
                                                    <label for="listrik" class="form-label">Listrik</label>
                                                    <div class="input-group">
                                                        <input type="number" id="listrik" class="form-control"
                                                            placeholder="Masukkan Listrik" name="listrik"
                                                            value="{{ $property->listrik }}" required>
                                                        <span class="input-group-text" id="basic-addon13">watt</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mb-3">
                                                    <label for="kamar_mandi" class="form-label">Kamar Mandi</label>
                                                    <input type="number" id="kamar_mandi" class="form-control"
                                                        placeholder="Masukkan Kamar Mandi" name="kamar_mandi"
                                                        value="{{ $property->kamar_mandi }}" required>
                                                </div>
                                                <div class="col mb-3">
                                                    <label for="kamar_tidur" class="form-label">Kamar Tidur</label>
                                                    <input type="number" id="kamar_tidur" class="form-control"
                                                        placeholder="Masukkan Kamar Tidur" name="kamar_tidur"
                                                        value="{{ $property->kamar_tidur }}" required>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col mb-3">
                                                    <label for="tipe" class="form-label">Tipe</label>
                                                    <select id="tipe" class="form-select form-select-lg" name="tipe">
                                                        <option value="">-Pilih Tipe-</option>
                                                        <option value="Rumah"
                                                            {{ $property->tipe == 'Rumah' ? 'selected' : '' }}>Rumah
                                                        </option>
                                                        <option value="Apartemen"
                                                            {{ $property->tipe == 'Apartemen' ? 'selected' : '' }}>
                                                            Apartemen
                                                        </option>
                                                        <option value="Ruko"
                                                            {{ $property->tipe == 'Ruko' ? 'selected' : '' }}>Ruko
                                                        </option>
                                                        <option value="Tahan Kavling"
                                                            {{ $property->tipe == 'Tahan Kavling' ? 'selected' : '' }}>
                                                            Tahan Kavling</option>
                                                        <option value="Gudang"
                                                            {{ $property->tipe == 'Gudang' ? 'selected' : '' }}>Gudang
                                                        </option>
                                                        <option value="Kost"
                                                            {{ $property->tipe == 'Kost' ? 'selected' : '' }}>Kost
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col mb-3">
                                                    <label for="luas_tanah" class="form-label">Luas Tanah</label>
                                                    <div class="input-group">
                                                        <input type="number" id="luas_tanah" class="form-control"
                                                            placeholder="Masukkan Luas Tanah" name="luas_tanah"
                                                            value="{{ $property->luas_tanah }}" required>
                                                        <span class="input-group-text"
                                                            id="basic-addon13">m<sup>2</sup></span>
                                                    </div>
                                                </div>

                                                <div class="col mb-3">
                                                    <label for="luas_bangunan" class="form-label">Luas Bangunan</label>
                                                    <div class="input-group">
                                                        <input type="number" id="luas_bangunan" class="form-control"
                                                            placeholder="Masukkan Luas Bangunan" name="luas_bangunan"
                                                            value="{{ $property->luas_bangunan }}" required>
                                                        <span class="input-group-text">m<sup>2</sup></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col mb-3">
                                                    <label for="harga" class="form-label">Harga</label>
                                                    <div class="input-group">
                                                        <span class="input-group-text">Rp</span>
                                                        <input type="number" id="harga" class="form-control"
                                                            placeholder="Masukkan Harga" name="harga"
                                                            value="{{ $property->harga }}" required>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-outline-secondary"
                                                data-bs-dismiss="modal">Batal</button>
                                            <button type="submit" class="btn btn-primary">Simpan</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modalAddProperty" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">

        <form method="POST" action="{{ url('admin/property') }}" enctype="multipart/form-data">
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Tambah Property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="nama" class="form-label">Nama</label>
                            <input type="text" id="nama" class="form-control" placeholder="Masukkan Nama" name="nama"
                                required>
                        </div>
                        <div class="col-6 mb-3">
                            <label for="alamat" class="form-label">Alamat</label>
                            <input type="text" id="alamat" class="form-control" placeholder="Masukkan Alamat"
                                name="alamat" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <label for="lokasi" class="form-label">Lokasi</label>
                            <input type="text" id="lokasi" class="form-control" placeholder="Masukkan Lokasi"
                                name="lokasi" required>
                        </div>
                        <div class="col mb-3">
                            <label for="listrik" class="form-label">Listrik</label>
                            <div class="input-group">
                                <input type="number" id="listrik" class="form-control" placeholder="Masukkan Listrik"
                                    name="listrik" required>
                                <span class="input-group-text" id="basic-addon13">watt</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <label for="kamar_mandi" class="form-label">Kamar Mandi</label>
                            <input type="number" id="kamar_mandi" class="form-control"
                                placeholder="Masukkan Kamar Mandi" name="kamar_mandi" required>
                        </div>
                        <div class="col mb-3">
                            <label for="kamar_tidur" class="form-label">Kamar Tidur</label>
                            <input type="number" id="kamar_tidur" class="form-control"
                                placeholder="Masukkan Kamar Tidur" name="kamar_tidur" required>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="tipe" class="form-label">Tipe</label>
                            <select id="tipe" class="form-select form-select-lg" name="tipe">
                                <option>-Pilih Tipe-</option>
                                <option value="Rumah">Rumah</option>
                                <option value="Apartemen">Apartemen</option>
                                <option value="Ruko">Ruko</option>
                                <option value="Tahan Kavling">Tahan Kavling</option>
                                <option value="Gudang">Gudang</option>
                                <option value="Kost">Kost</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label for="luas_tanah" class="form-label">Luas Tanah</label>
                            <div class="input-group">
                                <input type="number" id="luas_tanah" class="form-control"
                                    placeholder="Masukkan Luas Tanah" name="luas_tanah" required>
                                <span class="input-group-text" id="basic-addon13">m<sup>2</sup></span>
                            </div>
                        </div>

                        <div class="col mb-3">
                            <label for="luas_bangunan" class="form-label">Luas Bangunan</label>
                            <div class="input-group">
                                <input type="number" id="luas_bangunan" class="form-control"
                                    placeholder="Masukkan Luas Bangunan" name="luas_bangunan" required>
                                <span class="input-group-text">m<sup>2</sup></span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <label for="harga" class="form-label">Harga</label>
                            <div class="input-group">
                                <span class="input-group-text">Rp</span>
                                <input type="number" id="harga" class="form-control" placeholder="Masukkan Harga"
                                    name="harga" required>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col mb-3">
                            <label for="gambar" class="form-label">Gambar</label>
                            <input class="form-control" type="file" id="gambar" name="gambar">
                        </div>
                        <div class="col mb-3">
                            <label for="virtual_tour" class="form-label">Virtual Tour</label>
                            <input class="form-control" type="file" id="virtual_tour" name="virtual_tour">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </div>


        </form>
    </div>
</div>
@endsection