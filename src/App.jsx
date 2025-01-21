import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Header'
import Home from './Home/Home'
// import Footer from './Footer'
import WhatsappButton from './WhatsappButton'
import AboutUs from './AboutUs/AboutUs';
import Watermelon from './Products/Watermelon';
import Chrysanthemum from './Products/Chrysanthemum';
import Marigold from './Products/Marigold';
import Blogs from './Blog/Blogs';
import MediaCoverage from './Media Coverage/MediaCoverage';
import Career from './Career/Career';
import ContactUs from './Contact Us/ContactUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_Us" element={<AboutUs />} />

        <Route path="/marigold" element={<Marigold />} />
        <Route path="/chrysanthemum" element={<Chrysanthemum />} />
        <Route path="/watermelon" element={<Watermelon />} />

        <Route path="/blog" element={<Blogs/>} />
        <Route path="/media_Coverage" element={<MediaCoverage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact_Us" element={<ContactUs />} />
        
    
        
      </Routes>

      {/* <Footer/> */}
    </Router>
   
    <WhatsappButton/>
    
    </>
  )
}

export default App
