import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (

    <div className="mt-20 p-6">
  <div className="font-poppins h-auto w-full  mx-auto  md:flex md:justify-center md:items-center">
    <div className="w-full md:w-[1133px] text-gray-500  md:h-[312px] md:flex gap-10 md:gap-[87px] justify-between">
      <div className="mb-6 md:mb-0">
   <div className="p-0 m-0 flex items-center justify-start">
     <div className="w-9 h-9 p-0 mt-0 ml-0 md:w-12 md:h-12 relative">
       <Image
         src="/images/logoo.png"
         alt="logo"
         width={100}
         height={10}
       />
     </div>
     <span className="text-white font-bold text-[10px] lg:text-xl">
       Agentia World 
     </span>
   </div>

        <p className="text-[14px] mt-6 md:text-[16px] w-full md:w-[200px]">
        Next-generation AI agents powering the future of enterprise intelligence.
        </p>

        <div className="flex gap-4 mt-6 text-gray-500 ">
            <Github className="hover:text-white h-4 w-5 " />
            <Linkedin className="hover:text-white h-4 w-5 " />
            <Twitter className="hover:text-white h-4 w-5 " />
          </div>
      </div>
      <div className="mb-6 md:mb-0">
        <h1 className="text-[16px] md:text-[18px]  font-bold pb-2 md:pb-4 text-white">Products</h1>
        <p className="text-[14px] md:text-[16px] font-[500] pb-2 md:pb-4">Features</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Pricing</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Documentation
        </p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">API</p>
      </div>

    


      <div className="mb-6 md:mb-0">
        <h1 className="text-[16px] md:text-[18px] font-bold pb-2 md:pb-4 text-white"> Company</h1>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">About</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Blog</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Careers</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Contact</p>
      </div>

      <div>
        <h1 className="text-[16px] md:text-[18px] font-bold pb-2 md:pb-4 text-white">Legal</h1>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Privacy</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Terms</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Complaines</p>
    
     
        </div>
      </div>

  
  </div>
  <div className="flex justify-center items-center">
    <p className="w-full md:w-[1133px] text-[14px] md:text-[20px] mt-10  font-poppins">
      2023 Funiro. All rights reserved
    </p>
  </div>
</div>
  )
};

export default Footer;
