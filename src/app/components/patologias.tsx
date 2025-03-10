import React from "react";

const Patologias = () => {
  const cards = [
    {
      title: "Tratamento 1",
      list: ["Item 1", "Item 2", "Item 3"]
    },
    {
      title: "Tratamento 2",
      list: ["Item 4", "Item 5", "Item 6"]
    },
    {
      title: "Tratamento 3",
      list: ["Item 7", "Item 8", "Item 9"]
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Todos os tratamentos realizados</h1>
      
      <div className="flex justify-center mt-6">
        <div
          key={2}
          className="bg-blue-800 p-6 rounded-lg shadow-md flex flex-col items-start text-white"
        >
          <h3 className="text-2xl font-semibold mb-4">{cards[2].title}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {cards[2].list.map((item, idx) => (
              <li key={idx} className="text-lg">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Patologias;
