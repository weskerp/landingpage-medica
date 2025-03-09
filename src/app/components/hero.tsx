import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[145vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://gmcamktmedico.com.br/wp-content/uploads/2025/01/bg-1-felipe-lopes-20.01.webp")' }}>
      <div className="absolute top-20 left-0 w-full h-full bg-opacity-50 ">
        <div className="container px-34 py-12 text-white flex flex-col items-left justify-left h-full w-58/100">
          <img src="https://gmcamktmedico.com.br/wp-content/uploads/2025/01/logo-dr-felipe-lopes-2001.webp" alt="Logo" className="mb-6 max-w-65" />
          <p className="text-lg mb-4 text-[0.95rem]">CRM XXXXX | RQE XXXXX</p>
          <p className="text-lg mb-4 text-[0.95rem]">Médico ortopedista – Cirurgia da Coluna –  Tratamento da dor</p>
          <h2 className="text-[2.7rem] font-semibold mb-4">Soluções Precisas para Saúde da Coluna e Controle da Dor</h2>
          <p className="text-lg mb-4 text-[0.95rem]">Viver com dores na coluna ou limitações nos movimentos pode impactar diretamente sua qualidade de vida e até mesmo tarefas simples do dia a dia.</p>
          <p className="text-lg mb-4 text-[0.95rem]">Com uma abordagem dedicada e tratamentos modernos é possível melhorar a sua saúde e bem-estar. Você contará com um cuidado especializado em suas necessidades individuais para tratar problemas de coluna, dores crônicas ou realizar cirurgias modernas e avançadas, se necessário. Não deixe que a dor ou desconforto comprometam seus dias.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;