import { ChartBarBig, Earth, Shield } from "lucide-react"

const data2 = [
    {
      id: 1,
      image: <Earth/>,
      title: "Enterprise AI",
      message: "Custom AI agents designed for enterprise-scale operations and decision-making",
    },
    {
      id: 2,
      image: <ChartBarBig/>,
      title: "Neutral Opration",
      message: "Automated workflow optimization through distributed neural networks",
    },
    {
      id: 3,
      image: <Shield />,
      title: "Secure Intelligence",
      message: "Privacy-first AI solutions with military-grade security protocols",
    },
  
  ];
const Forth = () => {
  return (
    <div>
      <div id="Forth" className=" md:mb-20">
      <h1 className="heading">AI Solutions</h1>
      <p className="para">Transforming industries with intelligent agents</p>

    <div className="flex justify-center items-center md:mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-20 ">
         {data2.map((data3) =>(
         <div key={data3.id} className="py-6 bg-white/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group">
           <div className="md:w-16 md:h-16 w-10 h-10 mr-auto text-white rounded-xl bg-gradient-to-br from-purple-600 to-blue-600  justify-center mb-4 flex items-center ">
             {data3.image}
           </div>
           <h3 className= " text-sm md:text-lg font-semibold mb-2 text-white">
             {data3.title}
           </h3>
           <p className="text-xs md:text-sm  text-gray-400 max-w-xs mr-auto ">
             {data3.message}
           </p>
         </div>
      
    
     

     ))}
      </div>
    </div>
      </div>
  </div>
  )
}

export default Forth
