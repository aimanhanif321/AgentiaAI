import { CheckCircle, CheckCircle2 } from 'lucide-react'
import React from 'react'

const Fifth = () => {
  return (
    <div id='Fifth'>
        <h1 className="heading">Choose Your Plan</h1>
        <p className="para">Scale your AI capabilities with our flexible pricing</p>

      <div className=' flex flex-col md:flex-row md:gap-14 justify-center items-center mt-10 lg:p-10'>
        <div className='text-white w-full max-w-sm sm:max-w-md px-4 md:px-16 py-4 bg-white/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105'>
            <h1 className='font-bold text-[16px]  md:text-[32px]'>Starter</h1>
            <h1 className='font-bold text-[25px] md:text-[45px]'>$499<span className='text-[14px] text-slate-500'>/month</span></h1>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>2 AI Agent Instances</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Basic Neural Processing</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>24/7 Support</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[16px]'>Weekly Analytics</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Basic Integration Support</h1>
            </div>
            
            <button className="w-full py-3 rounded-xl mt-9 mb-9 font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-500">
        Get Started
      </button>
        </div>




{/* second */}
<div className='text-white  md:px-16 px-3 py-4 rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/30 border-2 border-purple-500 transition-all duration-300 transform hover:scale-105  w-full max-w-sm sm:max-w-md  bg-white/5  border-purple-500/10 hover:border-purple-500/30 '>
            <h1 className='font-bold text-[16px]  md:text-[32px]'>Proffesional</h1>
            <h1 className='font-bold text-[20px] md:text-[45px]'>$999<span className='text-[14px] text-slate-500'>/month</span></h1>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>  10 AI Agent Instances</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Advanced Neural Networks</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Priority Support</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Real-time Analytics</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Custom Integration</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>API Access</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Advanced Security</h1>
            </div>
            

    
            <button className="w-full py-3  rounded-xl mt-8 mb-8  font-semibold transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
        Get Started
      </button>
        </div>

{/* third */}

<div className='text-white w-full max-w-sm sm:max-w-md px-4 md:px-16 py-4 bg-white/5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 '>
            <h1 className='font-bold text-[16px]  md:text-[32px]'>Enterprice</h1>
            <h1 className='font-bold text-[20px] md:text-[45px]'>Custom<span className='text-[14px] text-slate-500'>/month</span></h1>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Unlimited Agent</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Full Neural Suite</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Dedicated Support Team</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Advanced Analytics Dashboard</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Custom Development</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Full API Access</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Enterprise Security</h1>
            </div>
            <div className='flex mt-6'>
            <CheckCircle2 className="md:w-7 md:h-7 w-4 h-4 text-purple-500 mr-2 "/>
            <h1 className='md:text-[20px] text-[10px]'>Custom Training</h1>
            </div>
            
            <button className="w-full py-3 rounded-xl mt-9 mb-9 font-semibold transition-all duration-300 border border-purple-500/30 hover:border-purple-500">
        Get Started
      </button>
        </div>



      </div>

    </div>
  )
}

export default Fifth
