"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import { Image } from "@nextui-org/react";

const ImageSlider = ({ images }: { images: string[] }) => {
  return (
    <>
      <Swiper className="mySwiper" modules={[Navigation]} navigation={true}>
        {images.map((img: string, i: number) => (
          <SwiperSlide
            key={i}
            className="xl:min-w-full min-h-[35vh] overflow-hidden xl:max-h-[80vh] rounded-md shadow-md shadow-blue-700/15"
          >
            <Image
              alt="images"
              className="xl:min-w-[68vw] xl:min-h-[80vh] min-h-[35vh] xl:max-h-[80vh]  object-cover rounded-md shadow-md shadow-blue-700/15"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
