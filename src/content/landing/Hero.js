import './Hero.css';


function Hero() {
    return (
        <>
            <header class="py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-black mb-2">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                <p class="lead fw-normal text-black-50 mb-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#sewa">Mulai Sewa Mobil</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img class="img-fluid rounded-3 my-5" src="./img/img_car.png" alt="..." />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Hero;

