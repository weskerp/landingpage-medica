import Image from 'next/image';
import React from 'react';

const doctors = [
    { name: 'Diagnóstico Preciso e Personalizado', specialty: 'A ortopedia moderna permite identificar com precisão as causas de dores na coluna vertebral e limitações de movimento. Seja por condições degenerativas, artrose, hérnia de disco, escoliose ou má postura. Com exames detalhados e análises personalizadas, é possível planejar um tratamento individualizado ideal para cada caso.' },
    { name: 'Tratamentos Avançados e Menos Invasivos', specialty: 'Os tratamentos não cirúrgicos hoje podem ser realizados através de aparelhos inovadores, altamente tecnológicos e com resultados impressionantes. Além disso, as técnicas de cirurgia da coluna evoluíram, sendo realizados procedimentos minimamente invasivos, reduzindo o tempo de recuperação e melhorando os resultados. Desde tratamentos conservadores até cirurgias modernas, o foco é aliviar a dor e restaurar a mobilidade.' },
    { name: 'Foco na Qualidade de Vida e Alívio da Dor', specialty: 'O manejo da dor é parte essencial dos cuidados com a coluna. Com terapias direcionadas,  individualizadas, medicação adequada, e uma reabilitação com muita tecnologia, é possível recuperar a qualidade de vida e voltar às atividades com mais conforto e segurança.'}
  ];

const CardSection = () => {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-1000 mt-[-2%] mx-6 min-h-[23.6875rem]">
          {doctors.map((doctor, index) => (
            <div
            key={index}
            className="bg-[#F4F4F4] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[1.5625rem] p-4 text-center"
          >
              <Image src='https://gmcamktmedico.com.br/wp-content/uploads/2025/01/check-dr-felipe-lopes-2001.svg' alt={doctor.name} width={65} height={65} className="rounded-full mt-[-18%] border-solid border-white/[.145]" />
              <h2 className="text-black text-xl font-semibold mt-4">{doctor.name}</h2>
              <p className="text-black">{doctor.specialty}</p>
            </div>
          ))}
        </div>
);
};

export default CardSection;