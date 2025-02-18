import { Brain, MessageCircleCode, ShieldEllipsis, Terminal } from 'lucide-react';
import React from 'react'

const data2 = [
    {
      id: 1,
      image: <Brain />,
      title: "Autonomous Learning",
      message: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
    },
    {
      id: 2,
      image: <MessageCircleCode />,
      title: "Multi-Modal Intelligence",
      message: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
    },
    {
      id: 3,
      image: <Terminal />,
      title: "Cognitive Integration",
      message: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
    },
    {
      id: 4,
      image: <ShieldEllipsis/>,
      title: "Ethical AI Framework",
      message: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
    },
  ];
const Third = () => {
  return (
    <div id='Third'>
      <div className="">
      <h1 className="heading md:mt-20 ">Neural Capabilities</h1>
      <p className="para md:mb-6">Powered by next-generation artificial intelligence</p>

    
      <div className="justify-start items-start md:mt-10 p-4 md:mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
         {data2.map((data2) =>(
         <div key={data2.id} className="py-6 bg-white/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group hover:transform hover:scale-105">
           <div className="md:w-16 md:h-16 w-10 h-10 text-white  mr-auto rounded-xl bg-gradient-to-br from-purple-600 to-blue-600  justify-center mb-4 flex items-center ">
             {data2.image}
           </div>
           <h3 className="text-sm md:text-lg font-semibold mb-2 text-white">
             {data2.title}
           </h3>
           <p className="text-xs md:text-sm  text-gray-400 max-w-xs mx-auto ">
             {data2.message}
           </p>
         </div>
      
    
     

     ))}
      </div>
      </div>
  </div>
  )
}

export default Third
