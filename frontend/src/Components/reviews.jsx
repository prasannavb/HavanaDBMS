import React from "react";
import Image from "../Assets/Image (1).png";
import "../Styles/reviews.css";

function Reviews() {
    return (
        <div className="reviews">
            <h3 className="review-heading bg-dark text-white border-primary">REVIEWS</h3>
            <div className="row review-cards">
                <div className="col-4">
                    <div className="card">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <i className="fa-solid fa-user review-card-img"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;