import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper/modules';

const ConhecaMais = () => {
  const imagens = [
    "https://www.auxiliadorapredial.com.br/blog/wp-content/uploads/sala-comercial-consultorio-medico.webp",
    "https://i.pinimg.com/originals/95/ac/1c/95ac1cca02330464dc42ceaf4ee9affd.jpg",
    "https://www.arquiter.com.br/wp-content/uploads/2023/02/sala-de-exame-medico-moderno-010.webp",
    "https://salaja.com.br/wp-content/uploads/2023/02/79140610-C190-402E-96B8-677883A53857-1200x1600.jpeg",
    "https://blog.habitatconsultorios.com.br/wp-content/uploads/2020/07/post_thumbnail-dfe7b1b82ecfebb5201609ccfc5837b3.jpeg",
  ];

  return (
    <div className="bg-blue-800 p-8">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        CONHEÇA UM POUCO MAIS
      </h1>
      <Swiper
        modules={[FreeMode, Autoplay]}
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={true} // Permite movimento contínuo
        autoplay={{
          delay: 0, // Movimento contínuo sem pausas
          disableOnInteraction: false,
        }}
        speed={5000} // Ajuste para velocidade mais suave
        loop={true}
        loopAdditionalSlides={5}
        centeredSlides={false} // Evita alinhamento incorreto
        className="w-full"
      >
        {imagens.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            style={{ width: '200px' }} // Define largura fixa para manter layout correto
          >
            <img
              src={img}
              alt={`Imagem ${index + 1}`}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ConhecaMais;
