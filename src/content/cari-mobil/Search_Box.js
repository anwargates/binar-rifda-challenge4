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
                                    <select name="driver" id="driver" placeholder='Pilih Tipe Driver'>
                                        <option value="">Dengan Sopir</option>
                                        <option value="">Tanpa Sopir (Lepas Kunci)</option>
                                    </select>
                                </div>

                                <div className='search_group'>
                                    <label for="release_date">Tanggal</label>
                                    <input type="date" name="choose_date" id="choose_date" />
                                </div>
                                <div className='search_group'>
                                    <label for="release_date">Waktu Jemput/Ambil</label>
                                    <select class="form-control selectpicker" data-hide-disabled="true" data-show-subtext="true" data-live-search="true">
                                    <option value="" disabled selected></option>
                                        <option value="update" data-subtext="old subtext">08.00</option>
                                        <option value="delete" data-subtext="more subtext">09.00</option>
                                    </select>                                
                                    </div>
                                <div className='search_group'>
                                    <label for="release_date">Jumlah Penumpang (optional)</label>
                                    <input type='number'/>               
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