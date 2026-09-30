import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  ChevronRight,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Hero2 from "../components/Hero2.jsx";
import Statistics from "../components/Statistics.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

import unitData from "../data/njesia-e-zhvillimit.json";

import "./NjesiaZhvillimit.css";

const staffImages = import.meta.glob(
  "../assets/images/staff/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getStaffImage(filename) {
  if (!filename) return null;

  const cleanFilename = filename.split("/").pop();

  const entry = Object.entries(staffImages).find(([path]) =>
    path.endsWith(`/${cleanFilename}`),
  );

  return entry ? entry[1] : null;
}

export default function NjesiaZhvillimit() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = unitData.sections[activeIndex];
  const activePhoto = getStaffImage(activeSection.photo);

  function selectSection(index) {
    setActiveIndex(index);
  }

  return (
    <>
      <Navbar />

      <Hero2 title={unitData.page.title} />

      <main className="development-page">
        <section className="development-intro">
          <div className="development-intro-heading">
            <span className="development-label">Njësia e Zhvillimit</span>

            <h1>
              Zhvillimi i shkollës
              <br />
              përmes <span>bashkëpunimit.</span>
            </h1>
          </div>

          <div className="development-functions">
            <div className="development-functions-title">
             
              <h2>Funksionet e Njësisë së Zhvillimit</h2>
            </div>

            <p className="development-intro-text">
              Njësia e Zhvillimit në Shkollën e Mesme Profesionale “Gjergj
              Canco” ka për mision të kontribuojë në zhvillimin e vazhdueshëm
              të shkollës, në përputhje me standardet kombëtare dhe evropiane,
              duke nxitur bashkëpunimin, përmirësimin e cilësisë dhe zhvillimin
              profesional.
            </p>
          </div>
        </section>

        <section className="development-unit">
          <div className="development-sidebar">
            {unitData.sections.map((section, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={section.id}
                  type="button"
                  className={`development-selector ${isActive ? "active" : ""}`}
                  onClick={() => selectSection(index)}
                  aria-pressed={isActive}
                >
                  <div className="development-selector-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="development-selector-content">
                    <h3>{section.title}</h3>
                    <span>{section.person}</span>
                  </div>

                  <ChevronRight size={19} />
                </button>
              );
            })}
          </div>

          <div className="development-mobile-pagination">
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (current) =>
                    (current - 1 + unitData.sections.length) %
                    unitData.sections.length,
                )
              }
              aria-label="Përgjegjësia e mëparshme"
            >
              <ArrowLeft className="pagination-prev" size={18} />
            </button>

            <div className="development-mobile-counter">
              <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
              <span>/ {String(unitData.sections.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (current) => (current + 1) % unitData.sections.length,
                )
              }
              aria-label="Përgjegjësia e ardhshme"
            >
              <ArrowRight className="pagination-next" size={18} />
            </button>
          </div>

          <article className="development-detail" key={activeSection.id}>
            <div className="development-detail-header">
              <div className="development-person">
                <div className="development-person-photo">
                  {activePhoto ? (
                    <img src={activePhoto} alt={activeSection.person} />
                  ) : (
                    <span>
                      {activeSection.person
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>

                <div>
                  <span className="development-person-role">
                    {activeSection.title}
                  </span>

                  <h2>{activeSection.person}</h2>
                </div>
              </div>

              <span className="development-detail-number">
                {String(activeSection.id).padStart(2, "0")}
              </span>
            </div>

            <div className="development-detail-body">
              <div className="development-detail-title">
                <span className="development-section-tag">Përgjegjësitë</span>

                <h3>{activeSection.title}</h3>
              </div>

              <div className="development-responsibilities">
                {activeSection.responsibilities.map((responsibility, index) => (
                  <div className="development-responsibility" key={index}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <p>{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="development-detail-footer">
              <span>{activeSection.responsibilities.length} përgjegjësi</span>
            </div>
          </article>
        </section>
      </main>

      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}
