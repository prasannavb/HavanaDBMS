import React from "react";
import Image1 from '../Assets/Hotel-view1.jpg';
import Image2 from '../Assets/Hotel-view2.jpg';
import Image3 from '../Assets/Hotel-view3.jpg';
import havanna from '../Assets/hvna1.jpeg';


function Carousel() {
    return (
        <div className="w-100 p-5"><div className=""> <img className="w-50 float-right" src={havanna}></img></div>
        <div className="w-50">
                  
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={Image1} className="d-block w-100 h-50" alt="..." />
    </div>
    <div class="carousel-item">
    <img src={Image2} className="d-block w-100 h-45" alt="..." />
    </div>
    <div class="carousel-item">
    <img src={Image3} className="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>

</div>
</div>
)
}

export default Carousel;