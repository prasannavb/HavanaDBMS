import React from "react";
import "../Styles/reviews.css";
import Image1 from'../Assets/imggrp.jpg'
import Image2 from'../Assets/mathi.jpg'
import Image3 from '../Assets/sus.jpg'

function Reviews() {
    return (
        <div className="reviews">
            <h3 className="review-heading bg-dark text-white border-primary">REVIEWS</h3>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mt-5">
                        <img src={Image1} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">Very nice hotel . Lost myself while staying here. Will stay again and definitely a must try for everyone!</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mt-5">
                    <img src={Image2} alt="" />
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">Me and my lover stayed and multiplied ourself. This is our 88th time visiting... trying to reach 100 times!</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card mt-5">
                    <img src={Image3} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title text-center">My Review</h5>
                            <p className="card-text">Me and my student prasanna visited for a conference and had a very good stay experience.</p>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;