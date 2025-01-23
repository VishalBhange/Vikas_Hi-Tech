import React from 'react'
import Footer from '../Footer'

export default function MediaCoverage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 p-9">
      <iframe width="520" height="293" src="https://www.youtube.com/embed/e9WRPx1sQTo" title="Dream yellow | झेंडू लागवड | विकास हायटेक नर्सरी | 👌कमी खर्चात जास्त नफा देणारी झेंडू फुल शेती" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <iframe width="520" height="293" src="https://www.youtube.com/embed/LFuRNZPu_5c" title="झेंडूचा जबरदस्त वाण👌 30 गुंठ्यात दिलं तीन लाखाचं उत्पन्न ! भरपूर फुटवा,आकर्षण साईज अन सर्वाधिक दर" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container for the boxes */}
      <div className="flex space-x-4">
        {/* Box 1 */}
        <div className="group relative w-32 h-32 bg-green-400 transition-all duration-300 hover:w-48">
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Software Solutions</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="group relative w-32 h-32 bg-gray-800 transition-all duration-300 hover:w-48">
          <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Development Team</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="group relative w-32 h-32 bg-yellow-400 transition-all duration-300 hover:w-48">
          <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Technology Consulting</p>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </div>
   
  )
}
