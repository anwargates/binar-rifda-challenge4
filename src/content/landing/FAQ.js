import './FAQ.css';
import Accordion from 'react-bootstrap/Accordion';


function FAQ() {
    return (
        <>
            <section class="py-5" id="faq">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="question">
                            <div class="asked-question">
                                <h3>Frequently Asked Question</h3>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  </p>
                            </div>
                            <div id="accordion">

                                <div class="container">
                                    <div class="accordion" id="faq">
                                        <div class="card">
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item className='acc-item' eventKey="0">
                                                    <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Apa saja bole
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className='acc-item' eventKey="1">
                                                    <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Berapa hari bole
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className='acc-item' eventKey="2">
                                                    <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Berapa hari bole
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item className='acc-item' eventKey="3">
                                                    <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                                                    <Accordion.Body>
                                                        Bagaimana ya
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ;






