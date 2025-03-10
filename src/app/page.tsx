"use client";

import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import HeroSection from './components/hero';
import CardSection from "./components/cards";
import Carousel from "./components/carousel";
import Depoimentos from './components/depoimentos';
import Videos from './components/videos';
import ComparacaoCards from './components/comparacaoCard';
import WhatsappButton from './components/whatsappButton';
import Procedimentos from './components/procedimentos';
import Tratamentos from './components/tratamentos';
import Patologias from './components/patologias';
import ConhecaMais from './components/conhecaMais';



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

        <CardSection/>
        <Carousel/>          
        <Depoimentos/>    
        <Videos/>      
        <WhatsappButton/>
        <ComparacaoCards/>
        <WhatsappButton/>
        <Procedimentos/>
        <WhatsappButton/>
        <Tratamentos/>
        <Patologias/>
        <ConhecaMais/>
      </div>
    </>
  );
}
