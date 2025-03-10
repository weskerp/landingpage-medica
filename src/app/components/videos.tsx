import React from "react";

const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ", // Substitua pelos seus links de vídeo
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
    "https://www.youtube.com/embed/kJQP7kiw5Fk",
];

const Videos = () => {
    return (
        <div className="p-6 w-7/10 flex justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                    <div key={index} className="p-4 rounded-lg shadow-lg">
                        <div className="relative w-full h-64">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={video}
                                title={`Vídeo ${index + 1}`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
