import React from "react";
import { X, Check } from "lucide-react"; // Ícones do Lucide

const items1 = [
  "Sente dores ao se levantar da cama e fica sem energia para as tarefas do dia a dia",
  "Já tentou vários métodos para aliviar a dor na coluna e nenhum deu certo",
  "Acorda no meio da noite procurando uma posição que não gere dor",
  "Perde horas do seu dia tentando lidar com formigamentos e desconfortos na coluna",
  "Tem medo de se abaixar para pegar algo no chão por causa das pontadas nas costas",
];
const items2 = [
  "Você recebe atenção individualizada, com foco em ouvir suas queixas e compreender seu estilo de vida.",
  "Cada paciente tem necessidades únicas; o Dr. Felipe elabora planos específicos para o seu caso.",
  " Recursos de ponta, como a cirurgia endoscópica de coluna, que tornam os procedimentos mais seguros e efetivos.",
  "Manejo avançado da dor, seja com terapias conservadoras ou intervenções minimamente invasivas.",
  "Técnicas que aceleram o retorno às atividades diárias, minimizando o tempo de recuperação.",
  "Foco em prevenir novos problemas e garantir uma melhor qualidade de vida a longo prazo.",
];

const ComparacaoCards = () => {
  return (
    <div className="p-6 w-72/100">
      {/* Grid Responsivo: 2 colunas no desktop, 1 no tablet/mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 - Lista com ❌ vermelho */}
        <div className="p-4 rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Se você...</h2>
          </div>
          <ul className="space-y-2">
            {items1.map((item, index) => (
              <li key={index} className="flex items-center">
                <X className="w-10 h-10 mr-2 text-red-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 - Lista com ✅ verde */}
        <div className="p-4 rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Saiba que...</h2>
            </div>
          <ul className="space-y-2">
            {items2.map((item, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-10 h-5 mr-2 text-white bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ComparacaoCards;
