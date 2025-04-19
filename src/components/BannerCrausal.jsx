import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import crausal1 from '../assets/crausal/1.png'
import crausal2 from '../assets/crausal/2.png'
import crausal3 from '../assets/crausal/3.png'


const images = [
    {
        src: crausal1,
        alt: "Banner Image 1"
    },
    {
        src: crausal2,
        alt: "Banner Image 2"
    },
    {
        src: crausal3,
        alt: "Banner Image 3"
    }
];

const BannerCarousel = () => {
    return (
        <div className="w-full h-full  rounded-3xl overflow-hidden">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={3000}
                
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerCarousel;
