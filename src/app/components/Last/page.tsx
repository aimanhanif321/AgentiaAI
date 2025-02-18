import { Earth, Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Last = () => {
  return (
    <div id="Last">
      <h1 className="heading">Get in Touch</h1>
      <p className="para">Ready To Transform Your Bussinwss with AI</p>

      <div className="grid md:grid-cols-2 gap-12 text-white justify-center items-center p-12 lg:p-16 ">
        <div>
          <h1 className="text-[14px] md:text-[32px] font-bold mb-6">Contact Information</h1>
          <div className="flex mr-2 mb-5">
            {" "}
            <Mail className="md:w-7 md:h-7 h-4 w-4  text-purple-500 mr-2 " />
            <h1 className="md:text-[20px] text-[10px]">contact@agentiaworld.com</h1>
          </div>
          <div className="flex mr-2 mb-5">
            {" "}
            <Earth className="md:w-7 md:h-7 h-4 w-4  text-purple-500 mr-2 " />
            <h1 className="md:text-[20px] text-[10px]">www.agentiaworld.com</h1>
          </div>

          <div className="flex gap-4 text-gray-500 ">
            <Github className="hover:text-white h-4 w-5 " />
            <Linkedin className="hover:text-white h-4 w-5 " />
            <Twitter className="hover:text-white h-4 w-5 " />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
  <form action="#" className="grid grid-cols-2 gap-6">
    {/* First Name & Last Name - Ek Line Mein */}
    <input
      type="text"
      placeholder="First Name"
      className="bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
    />

    {/* Email - Full Width (2 Columns) */}
    <input
      type="email"
      placeholder="Email"
      className="col-span-2 w-full bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
    />

    {/* Message - Full Width (2 Columns) */}
    <textarea
      placeholder="Message"
      className="col-span-2 w-full h-32 bg-white/5 border border-purple-500/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
    ></textarea>
  </form>

  {/* Submit Button */}
  <button className="w-full py-3  rounded-xl mt-8 mb-8  font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
      Send Message
      </button>
</div>

      </div>
    </div>
  );
};

export default Last;


