import './Search_Box.css';


function Search_Box() {
    return (
        <>
            <section class="py-5" id="search">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <form id="search-car" action="/">
                            <div className='search_container'>
                                <div className='search_group'>
                                    <label for="driver">Tipe Driver</label>
                                    <select class="form-control selectpicker" name="driver" id="driver">
                                    <option value="" disabled selected>Pilih Tipe Driver</option>
                                        <option value="dgnSopir">Dengan Sopir</option>
                                        <option value="tnpSopir">Tanpa Sopir (Lepas Kunci)</option>
                                    </select>
                                </div>

                                <div className='search_group'>
                                    <label for="release_date">Tanggal</label>
                                    <input type="text" name="choose_date" id="choose_date" placeholder='Pilih Tanggal' onfocus="(this.type='date')"/>
                                </div>
                                <div className='search_group'>
                                    <label for="release_date">Waktu Jemput/Ambil</label>
                                    <select class="form-control">
                                    <option value="" disabled selected>Pilih Waktu</option>
                                        <option value="update">08.00</option>
                                        <option value="delete">09.00</option>
                                    </select>                                
                                    </div>
                                <div className='search_group'>
                                    <label for="release_date">Jumlah Penumpang (optional)</label>
                                    <input type='number' placeholder='Jumlah Penumpang'/>               
                                    </div>
                                <div className='submit'>
                                    <button type="submit">Cari Mobil</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search_Box;