import React from "react";

const WhatsappButton = () => {
  return (
    <div className="flex justify-center items-center h-20">
      <a
        href="https://wa.me/SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="relative px-8 py-4 text-white font-bold text-lg rounded-full shadow-lg
                   transition-all duration-500 flex items-center justify-center w-100
                   bg-gradient-to-r from-[#368D64] to-[#206545] hover:scale-105"
      >
        AGENDAR CONSULTA AGORA
        <span className="absolute inset-0 bg-white opacity-20 transform skew-x-12 
                        animate-[shine_4s_infinite]"></span>
      </a>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg) scaleX(0.2);
          }
          100% {
            transform: translateX(100%) skewX(-12deg) scaleX(0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsappButton;
