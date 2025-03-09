import React from "react"; 
import Image from "next/image"; // Importação necessária

const depoimentos = [
    'Texto 1', 
    'Texto 2',
    'Texto 3',
    'Texto 4',
    'Texto 5',
    'Texto 6',
];

const Depoimentos = () => {
    return (
        <div className="p-6 w-7/10 flex justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                {depoimentos.map((text, index) => (
                    <div key={index} className="w-9/10 bg-gray-200 p-6 rounded-lg shadow-lg">
                        <p className="text-gray-800 text-xs">{text}</p>
                        
                        <div className="mt-3 flex space-x-1">
                            {[...Array(5)].map((_, starIndex) => (
                                <Image
                                    key={starIndex}
                                    src="/star.avif"
                                    alt={`Star ${starIndex + 1}`}
                                    width={20}
                                    height={20}
                                    className="object-cover"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Depoimentos;
