import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageSlides() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            style={{"height":"70vh", "width":"90vw"}}
            className="d-block w-100 h-50"
            src="https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Austrian-Alps.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.moonhoneytravel.com/wp-content/uploads/2019/04/moonhoneytravel_trekking-blog_montenegro-hikes.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Italian-Alps.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default ImageSlides;