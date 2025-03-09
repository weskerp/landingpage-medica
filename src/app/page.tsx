"use client";

import Head from 'next/head';
import Image from 'next/image';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import HeroSection from './components/hero';
import CardSection from "./components/cards";



export default function Home() {
  

  return (
    <>
      <Head>
        <title>Landing Page Médica</title>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <HeroSection/>

        {/* Cards de Médicos */}
        <CardSection/>
        {/* Carrossel */}
        <div className="w-full max-w-4xl mt-6">
          <SwiperReact pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><Image src="/slide1.jpg" alt="Slide 1" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><Image src="/slide2.jpg" alt="Slide 2" width={800} height={400} /></SwiperSlide>
            <SwiperSlide><Image src="/slide3.jpg" alt="Slide 3" width={800} height={400} /></SwiperSlide>
          </SwiperReact>
        </div>          

        {/* Botão WhatsApp */}
        <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="mt-10 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600">
          Fale Conosco no WhatsApp
        </a>
      </div>
    </>
  );
}
