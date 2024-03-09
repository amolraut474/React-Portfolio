import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
function AutoCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>

            <div className='Slide-1'>
                <div class="hero-item">
                    <h3>25 may 2021</h3>
                    <h2> Trion Personal<br/> Creative  Portfolio amol raut</h2>
                    <div class="hero-dec"></div>
                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                    <button class="btn" type="submit">Submit</button>
                </div>
                <div class="overlay"></div>
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>

            {/* Add more slides as needed */}
        </Slider>
    );
}

export default AutoCarousel;
