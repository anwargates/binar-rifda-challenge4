import Footer from '../footer/Footer';
import Nav from '../header/Nav';
import FAQ from './landing/FAQ';
import Hero from './landing/Hero';
import Services from './landing/Services';
import Sewa from './landing/Sewa';
import Testimonial from './landing/Testimonial';
import Why_Us from './landing/Why_Us';


function Landing() {
    return (
        <>
        <Nav />
        <Hero />
        <Services />
        <Why_Us />
        <Testimonial />
        <Sewa />
        <FAQ />
        <Footer />
        </>
    )
}

export default Landing;