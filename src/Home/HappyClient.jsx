import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { IoCloudDone } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io"; 

export default function HappyClient() {
  return (
    <div>
        <div className="relative mx-auto my-16 bg-cover bg-center h-auto w-full max-w-[90%] lg:max-w-[1000px] opacity-90 rounded-3xl" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/young-green-leaves-leaf-bud-tea-tree-plantation_185094-943.jpg')", backgroundAttachment: 'fixed' }}>
  {/* Background Image Div */}

  {/* Content Div */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6 rounded-3xl bg-black/50 p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {/* Each Card */}
      <div className="p-6 rounded-md shadow-lg  text-center  text-white">
        <IoPersonSharp className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">Happy Clients</h2>
        <p className="text-2xl font-extrabold t text-white">1000+</p>
      </div>

      <div className="p-6 rounded-md shadow-lg  text-center text-white">
        <IoCloudDone className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">Projects Completed</h2>
        <p className="text-2xl font-extrabold  text-white">1000+</p>
      </div>

      <div className="p-6 rounded-md shadow-lg  text-center text-white">
        <IoIosPeople className="text-6xl mx-auto mb-4"/>
        <h2 className="text-xl font-bold text-white">No. of People</h2>
        <p className="text-2xl font-extrabold text-white">300+</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
