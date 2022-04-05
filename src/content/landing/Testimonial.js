import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Testimonial() {
    return (
        <>
            <section class="py-5" id="testimonial">
                <div class="container mx-0 my-5">
                    <div class="row gx-5">
                        <div class="testimonial">
                            <h1>Testimonial</h1>
                            <p> Berbagai review positif dari para pelanggan kami </p>
                            <br />
                            <div class="contain">
                                <OwlCarousel id='owl-example' className='owl-theme'
                                    // navText={<img src='./img/left-button.png'>","<img src='./img/right-button.png'>}
                                    loop margin={10} nav dots={false}>
                                    <div class='item'>
                                        <div class="item-kiri">
                                            <img src="./img/img_photo.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><img src='./img/rate.png'></img></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div class="item-kiri">
                                            <img src="./img/img_photo.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><img src='./img/rate.png'></img></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div class="item-kiri">
                                            <img src="./img/img_photo girl.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><img src='./img/rate.png'></img></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                    <div class='item'>
                                        <div class="item-kiri">
                                            <img src="./img/img_photo girl.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><img src='./img/rate.png'></img></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                                {/* <button onClick={OwlCarousel.prev(10)}>
                                    left
                                </button>
                                <button onClick={OwlCarousel.next(10)}>
                                    right
                                </button> */}

                                {/* <div id="owl-carousel" class="owl-carousel owl-theme">
                                    <div class="item">
                                        <div class="item-kiri">
                                            <img src="./img/img_photo.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><i class="fa-solid fa-star" id="star"></i></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>

                                    <div class="item">
                                        <div class="item-kiri">
                                            <img src="./img/img_photo.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><i class="fa-solid fa-star" id="star"></i></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>

                                    <div class="item">
                                        <div class="item-kiri">
                                            <img src="./img/img_photo girl.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><i class="fa-solid fa-star" id="star"></i></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>

                                    <div class="item">
                                        <div class="item-kiri">
                                            <img src="./img/img_photo girl.png" class="img-fluid" alt="Responsive image" />
                                        </div>

                                        <div class="item-kanan">
                                            <p><i class="fa-solid fa-star" id="star"></i></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed!</p>
                                            <p>John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;

