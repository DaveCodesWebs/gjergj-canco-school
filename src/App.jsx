import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CurriculumTech from "./pages/CurriculumTech";
import CurriculumElec from "./pages/CurriculumElec";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import ScrollToTop from "./components/ScrollToTop";
import Staff from "./pages/Staff";
import About from "./pages/About";
import Museum from "./pages/Museum";
import Laboratoret from "./pages/Laboratoret";
import NjesiaZhvillimit from "./pages/NjesiaZhvillimit";
export default function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/programi-mesimor/tik" element={<CurriculumTech />} />
        <Route
          path="/programi-mesimor/elektroteknik"
          element={<CurriculumElec />}
        />
        {/* <Route path="/kontakt" element={<Contact />} /> */}
        <Route path="/apliko" element={<Apply />} />
        <Route path="/organigrama" element={<Staff />} />
        <Route path="/rreth-nesh" element={<About />} />
        <Route path="/salla-muzeale" element={<Museum />} />
        <Route path="/njesia-e-zhvillimit" element={<NjesiaZhvillimit />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/laboratoret" element={<Laboratoret />} />
      </Routes>
      
   </>
  );
}