"use client";

import Image from 'next/image';
import React from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg"
];

const Carousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4">
      <div className="my-5 w-full mx-auto flex justify-center align-items-center">
        <Image src="https://gmcamktmedico.com.br/wp-content/uploads/2025/01/seta-dr-felipe-lopes-2001.svg" alt="" width={45} height={45} />
      </div>
      <div className="text-center">
        <h2 className="text-blue text-lg font-bold">TRANSFORMAÇÕES REAIS,</h2>
        <h2 className="text-xl font-semibold">HISTÓRIAS DE SUCESSO:</h2>
      </div>

      <div className="mt-6">
        <SwiperReact
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={300} // Largura fixa
                  height={300} // Altura fixa
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </SwiperReact>
      </div>
    </div>
  );
};

export default Carousel;
