import React from "react";
import '../Styles/footer.css';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark text-muted footer">
            <section id="foot">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div id="text-company" className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i id="font" className="fas fa-gem me-3 "></i>Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div id="text-company" className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i id="font" className="fas fa-home me-3 "></i> New York, NY 10012, US</p>
                            <p>
                                <i id="font" className="fas fa-envelope me-3 "></i>
                                info@example.com
                            </p>
                            <p><i id="font" className="fas fa-phone me-3 "></i> + 01 234 567 88</p>
                            <p><i id="font" className="fas fa-print me-3 "></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 link-secondary">
                            <i id="font" className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i id="font" className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i id="font" className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i id="font" className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 link-secondary">
                            <i id="font" className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </section>
            </section>
        </footer>

    )
}


export default Footer;