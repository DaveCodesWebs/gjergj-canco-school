import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Statistics from "../components/Statistics";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useState } from "react";

import laboratoryData from "../data/laboratoret-layout.json";

import "./Laboratoret.css";

const laboratoryImages = import.meta.glob(
  "../assets/images/laboratoret/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getLaboratoryImage(filename) {
  if (!filename) return "";

  const cleanFilename = filename.split("/").pop();

  const entry = Object.entries(laboratoryImages).find(([path]) =>
    path.endsWith(`/${cleanFilename}`),
  );

  return entry ? entry[1] : "";
}

function LaboratoryImage({ lab, className = "" }) {
  const image = getLaboratoryImage(lab.image);

  return (
    <div className={`laboratory-image ${className}`}>
      {image ? (
        <img
          src={image}
          alt={lab.name}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="laboratory-image-placeholder">
          Nuk ka imazh
        </div>
      )}
    </div>
  );
}

function SecondaryLaboratory({ lab, reverse }) {
  return (
    <article
      className={`laboratory-secondary ${
        reverse ? "laboratory-secondary--reverse" : ""
      }`}
    >
      <LaboratoryImage lab={lab} />

      <div className="laboratory-secondary-content">
       

        <h2>{lab.name}</h2>

        <p>{lab.description}</p>
      </div>
    </article>
  );
}

function LaboratoryCard({ lab }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`laboratory-card ${isExpanded ? "expanded" : ""}`}>
      <div className="laboratory-card-content">
        <h3>{lab.name}</h3>

        <p>{lab.description}</p>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Mbyll" : "Lexo me shume"}
        </button>
      </div>
    </article>
  );
}

export default function Laboratoret() {
  const featuredLab = laboratoryData.featured;

  const multimediaLab = laboratoryData.grid.find(
    (lab) => lab.name === "Laboratori Multimedia",
  );

  const secondaryLabs = [
    ...laboratoryData.secondary,
    multimediaLab,
  ].filter(Boolean);

  const secondaryNames = new Set(
    secondaryLabs.map((lab) => lab.name),
  );

  const gridLabs = laboratoryData.grid.filter(
    (lab) => !secondaryNames.has(lab.name),
  );

  return (
    <div>
      <Navbar />

      <Hero2 title="Laboratorët" />

      <main className="laboratory-page">
        {/* Main laboratory */}
        <section className="laboratory-featured">
          <div className="laboratory-featured-image-wrapper">
            <LaboratoryImage
              lab={featuredLab}
              className="laboratory-featured-image"
            />
          </div>

          <div className="laboratory-featured-content">
           

            <h1>{featuredLab.name}</h1>

            <p>{featuredLab.description}</p>
          </div>
        </section>

        {/* Secondary laboratories */}
        <section className="laboratory-secondary-list">
          {secondaryLabs.map((lab, index) => (
            <SecondaryLaboratory
              key={lab.name}
              lab={lab}
              reverse={index % 2 === 1}
            />
          ))}
        </section>

        {/* Divider / load more */}
        <section className="laboratory-more">
          <span>+ DHE ME SHUME...</span>
        </section>

        {/* Laboratory grid */}
        <section className="laboratory-grid-section">
          

          <div className="laboratory-grid">
            {gridLabs.map((lab) => (
              <LaboratoryCard key={lab.name} lab={lab} />
            ))}
          </div>
        </section>

        {/* Filler sections */}
        
      </main>

      <Statistics />
      <CTA />
      <Footer />
    </div>
  );
}