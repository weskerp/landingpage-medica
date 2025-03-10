"use client";
import { motion } from "framer-motion";

const ConhecaMais = () => {
  const imagens = [
    "https://www.auxiliadorapredial.com.br/blog/wp-content/uploads/sala-comercial-consultorio-medico.webp",
    "https://i.pinimg.com/originals/95/ac/1c/95ac1cca02330464dc42ceaf4ee9affd.jpg",
    "https://www.arquiter.com.br/wp-content/uploads/2023/02/sala-de-exame-medico-moderno-010.webp",
    "https://salaja.com.br/wp-content/uploads/2023/02/79140610-C190-402E-96B8-677883A53857-1200x1600.jpeg",
    "https://kannoarquitetura.com.br/wp-content/uploads/2021/06/Consultorio-medico-moderno.jpg",
    "https://guiaconsultorio.boaconsulta.com/wp-content/uploads/2022/05/tipos-de-consultorios-medicos-31052022.jpg",
  ];

  return (
    <div className="bg-blue-800 p-8 w-full">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        CONHEÇA UM POUCO MAIS
      </h1>
      <div className="overflow-hidden relative w-full min-h-[200px]">
        <motion.div
          className="flex w-max space-x-6"
          animate={{ x: ["0%", "-50.5%"] }}
          transition={{
            ease: "linear",
            duration: 5000,
            repeat: Infinity,
          }}
        >
          {[...imagens, ...imagens].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-[200px] h-[200px] object-cover rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ConhecaMais;
