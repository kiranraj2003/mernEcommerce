import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/3042d58eedea60dc.jpeg?q=60"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/57d9b129e302642e.jpg?q=60"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/7c40025fa4e6e96c.jpeg?q=60"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/e7c52d4e7e6c6bc4.jpg?q=60"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel