import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CurriculumTech from "./pages/CurriculumTech";
import CurriculumElec from "./pages/CurriculumElec";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kurrikula/tik" element={<CurriculumTech />} />
        <Route
          path="/kurrikula/elektroteknik"
          element={<CurriculumElec />}
        />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/apliko" element={<Apply />} />
      </Routes>
      
   </>
  );
}