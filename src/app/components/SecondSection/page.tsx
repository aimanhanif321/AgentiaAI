import { Brain, Code2, Cpu, Earth, WholeWordIcon } from "lucide-react";
import React from "react";

const data = [
  {
    id: 1,
    image: <Brain />,
    title: "Neuteral Network",
    message: "Advanced neural architectures for complex decision making",
  },
  {
    id: 2,
    image: <Cpu />,
    title: "Deep Learning",
    message: "Sophisticated deep learning models for pattern recognition",
  },
  {
    id: 3,
    image: <Code2 />,
    title: "Advance ML",
    message: "Cutting-edge machine learning algorithms",
  },
  {
    id: 4,
    image: <Earth/>,
    title: "Global Scale",
    message: "Advanced neural architectures for complex decision making",
  },
];

const SecondSection = () => {
  return (
    <div id="SecondSection">
      <h1 className="heading">Powered by Advanced AI</h1>
      <p className="para">Built on cutting-edge neural architectures</p>

      <div className="justify-center items-center md:mt-20  p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((data) => (
          <div
            key={data.id}
            className="py-6 bg-white/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105 text-center"
          >
            <div className="md:w-16 md:h-16 w-10 h-10 text-white  mr- mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              {data.image}
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-2 text-white">{data.title}</h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-xs mx-auto">{data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
