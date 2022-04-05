import './Why_Us.css';


function Why_Us() {
    return (
        <>
            <section class="py-5" id="why-us">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="why-us">
                            <h2>Why Us? </h2>
                            <p> Mengapa harus pilih Binar Car Rental? </p>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="card-group">
                            <div class="card cardss">
                                <img class="card-img-top img-fluid" src="./img/thumbs.png" alt="Responsive image" />
                                <div class="card-body">
                                    <h5 class="card-title">Mobil Lengkap</h5>
                                    <p class="card-text"> Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </div>
                            </div>

                            <div class="card cardss">
                                <img class="card-img-top img-fluid" src="./img/pricetag.png" alt="Responsive image"  />
                                <div class="card-body">
                                    <h4 class="card-title">Harga Murah</h4>
                                    <p class="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                                </div>
                            </div>

                            <div class="card cardss">
                                <img class="card-img-top img-fluid" src="./img/clock.png" alt="Responsive image" />
                                <div class="card-body">
                                    <h4 class="card-title">Layanan 24 Jam</h4>
                                    <p class="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </div>
                            </div>

                            <div class="card cardss">
                                <img class="card-img-top img-fluid" src="./img/certificated.png" alt="Responsive image" />
                                <div class="card-body">
                                    <h4 class="card-title">Sopir Profesional</h4>
                                    <p class="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why_Us;

