import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'; // Ensure Tailwind CSS is imported here
import Navbar from "./component/pages/Homepage/Navbar/Navebar";
import HeroSectiony from "./component/HeroSectionRound/HeroSection";

import ServicePage from './component/ServicePage/ServicePage'
import Galery from './component/ImageGalery/Galery'
import Ourblog from './component/OurBlog/Ourblog'
import Footer2 from './component/pages/Footer2/Footer2'
import Marquee from './component/HeadingSection/HeadingSection'
import ImageGrid from "./component/RenderPage/ImageGrid";

function App() {
  return (
   <>
   <Navbar/>
   <div>


  
<section id="home"  className='pt-24'>

  <HeroSectiony/>
</section>

<section id="Marquee" >
  <Marquee />
</section>




<section id="Services">
  <ServicePage />
</section>

<section id="About" >
  <Galery />
</section>
<section id="Blog" >
  <Ourblog />

</section>
<section id="Testimonials" >
  <ImageGrid />
</section>
<section id="Blog bg-gray-600" >
  <Footer2 />

</section>

</div>
   </>
  );
}

export default App;
