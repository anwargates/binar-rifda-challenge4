import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html" className="logo"><img src="assets/img/f1logo.png" className="img-fluid" alt="" /></a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto" href="#our-services">Our Services</a></li>
            <li><a className="nav-link scrollto" href="#why-us">Why Us</a></li>
            <li><a className="nav-link scrollto" href="#testimonial">Testimonial</a></li>
            <li><a className="nav-link scrollto" href="#faq">FAQ</a></li>
            <li className='nav-item register'>
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
    </>
  );
}

export default App;
