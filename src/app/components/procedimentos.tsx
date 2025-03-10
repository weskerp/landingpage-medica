import React from "react";

const Procedimentos = () => {
  const cards = [
    {
      image: "/image1.jpg",
      title: "Procedimento 1",
      description: "Descrição do procedimento 1"
    },
    {
      image: "/image2.jpg",
      title: "Procedimento 2",
      description: "Descrição do procedimento 2"
    },
    {
      image: "/image3.jpg",
      title: "Procedimento 3",
      description: "Descrição do procedimento 3"
    },
    {
      image: "/image4.jpg",
      title: "Procedimento 4",
      description: "Descrição do procedimento 4"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Procedimentos Realizados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-blue-500 p-6 rounded-lg shadow-md flex flex-col items-center text-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Procedimentos;
