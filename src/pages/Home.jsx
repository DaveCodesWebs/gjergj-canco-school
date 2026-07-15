import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/PartnersSection";

import Features from "../components/Features";
import News from "../components/News";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import HomeAbout from "../components/HomeAbout";
import Deget from "../components/Deget";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Partners />
       <HomeAbout />
      
       
       <Gallery />
       <Deget />
     
    
      <News />
      <CTA />
      <Footer />
    </>
  );
}
