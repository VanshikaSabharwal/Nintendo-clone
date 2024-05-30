"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// for animation in slider
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressSquare = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressSquare.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="sliderContainer"
      >
        <SwiperSlide>
          <Image
            src="/images/marioImg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="First slide"
            className="sliderContainer"
          />
          <h2 className="sliderImgHeading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            voluptates unde dolorem!
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/minecraftImg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Third slide"
            className="sliderContainer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/oceanImg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Second slide"
            className="sliderContainer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/zeldaImg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Second slide"
            className="sliderContainer"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressSquare}>
            <rect x="4" y="4" width="40" height="40" rx="8" ry="8"></rect>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
