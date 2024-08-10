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
