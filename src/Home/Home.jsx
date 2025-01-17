import React from 'react'

import WelcomeToVikas from './WelcomeToVikas';
import HappyClient from './HappyClient';
import OurExpertise from './OurExpertise';
import TechnologicallyGrown from './TechnologicallyGrown';
import WhyUs from './WhyUs';
import SeeOurProducts from './SeeOurProducts';


export default function Home() {
 
  return (

    <div>

    <div className="flex justify-center items-center bg-gray-100">
  <iframe
    className="w-full aspect-video shadow-lg"
    src="https://www.youtube-nocookie.com/embed/YvgtKS8__fg?autoplay=1&controls=0&rel=0&playsinline=1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="YouTube Video"
  ></iframe>
</div>


<WelcomeToVikas/>

<HappyClient/>

<OurExpertise/>

<TechnologicallyGrown/>

<WhyUs/>

<SeeOurProducts/>


</div>
  )
}
