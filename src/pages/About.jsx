import "./About.css";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import { useState } from "react";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import librariImage from "../assets/images/good/librari_smiling .webp";
import javaImage from "../assets/images/javapraktikes.webp";
import plastikaImage from "../assets/images/plastika.webp";

import electricGallery from "../assets/images/rrethnesh2.webp";
import students from "../assets/images/good/partner.webp";
const documents = [
  {
    title: "Urdhër i përmbledhur",
    description: "Dokument zyrtar i institucionit.",
    file: "/docs/urdher_compressed-1.pdf",
  },
  {
    title: "Udhëzim i Ministrisë së Financave nr. 14",
    description: "Udhëzim, datë 23.12.2024.",
    file: "/docs/Udhezim i MF nr. 14, date 23.12.2024.pdf",
  },
  {
    title: "Udhëzim nr. 1090",
    description:
      "Për procedurat e planifikimit dhe zbatimin e arsimit dhe formimit profesional në formën e dyfishtë.",
    file: "/docs/Udhëzimi nr. 1090, date 12.12.2024 'Per procedurat e planifikimit dhe zbatimin e arsimit dhe formimit profesional ne formen e dyfishte'.pdf",
  },
  {
    title: "Vendim për kontributin për aksidentet në punë",
    description: "Vendim, datë 13.11.2024.",
    file: "/docs/vendim-2024-11-13-702 per kontributin per aksidentet ne pune.pdf",
  },
  {
    title: "VKM 691 për Arsimin Dual",
    description: "VKM, datë 06.11.2024.",
    file: "/docs/VKM 691, date 6.11.2024 Për Dualin.pdf",
  },
  {
    title: "Urdhër nr. 283 për skeletkurrikulat",
    description:
      "Miratimi i skeletkurrikulave të arsimit profesional për vitin shkollor 2026–2027.",
    file: "/docs/Urdher-nr.-283-i-Ministrit-per-miratimin-e-skeletkurrikulave-te-AP-per-vitin-2026-2027-2.pdf",
  },
  {
    title: "Udhëzues për shkollat profesionale",
    description:
      "Udhëzues për shkollat profesionale për vitin shkollor 2026–2027.",
    file: "/docs/AKAFPK-Udhezues-per-shkollat-profesionale-per-vitin-shkollor-2026-2027-Final_compressed.pdf",
  },
  {
    title: "Ligj nr. 32",
    description: "Ligj, datë 04.04.2024.",
    file: "/docs/ligj-2024-04-04-32-1.pdf",
  },
  {
    title: "Udhëzim, datë 10.02.2026",
    description: "Dokument zyrtar udhëzues.",
    file: "/docs/udhezim-2026-02-10-1.pdf",
  },
];

export default function About() {
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero2 title="Rreth Nesh" />

      <main className="about-page">
        <section className="about-section about-history">
          <div className="about-section-heading">
            <span>01</span>
            <h2>Historiku</h2>
          </div>

          <div className="about-history-content">
            <div className="about-section-content">
              <p>
                Shkolla Teknike Elektrike “Gjergj Canco” është një nga
                institucionet me traditë në arsimin profesional shqiptar. Ajo
                trashëgon traditën e Shkollës Teknike të Tiranës, të themeluar
                në vitet e para të zhvillimit të arsimit teknik në vend.
              </p>

              <p>
                Në vitet në vijim, shkolla u zhvillua si pjesë e traditës së
                Politeknikumit të Tiranës, duke përgatitur breza teknikësh për
                sektorët industrialë dhe teknikë të vendit.
              </p>

              <p>
                Në vitin 1983, nga struktura e shkollës së mesme industriale “7
                Nëntori” u krijua më vete Shkolla Elektrike, e cila vijoi
                traditën e përgatitjes së specialistëve në elektroteknikë,
                elektronikë dhe ndërlidhje.
              </p>

              <p>
                Sot, Shkolla Teknike Elektrike “Gjergj Canco” vijon këtë traditë
                duke ndërthurur arsimin profesional me teknologjitë moderne,
                praktikën profesionale dhe bashkëpunimin me biznesin.
              </p>

              <p>
                Shkolla është e akredituar si ofruese e kualifikimeve
                profesionale të niveleve 2–5 të Kornizës Shqiptare të
                Kualifikimeve, me oferta në fushat e Teknologjisë së
                Informacionit dhe Komunikimit (TIK) dhe Elektroteknikës.
              </p>
            </div>

            <div className="about-image2">
              <img src={electricGallery} alt="Elektrik Gallery" />
            </div>
          </div>
        </section>
        <section className="about-section about-vision">
          <div className="about-section-heading">
            <span>02</span>
            <h2>Vizioni</h2>
          </div>

          <div className="about-highlight">
            <p>
              “Së bashku drejt një bote pune që na sfidon dhe na frymëzon çdo
              ditë.”
            </p>
          </div>
        </section>

        <section className="about-section about-mission">
          <div className="about-section-heading">
            <span>03</span>
            <h2>Misioni</h2>
          </div>

          <div className="about-mission-content">
            <div className="about-mission-text">
              <p>
                Shkolla Teknike Elektrike “Gjergj Canco” zhvillon interesat
                specifike të çdo nxënësi si individë të veçantë.
              </p>

              <p>
                Krijon mundësi të ndryshme për të ndjekur shtigje studimi
                fleksibël dhe cilësore.
              </p>

              <p>
                Aftëson nxënësit me kompetencat e së ardhmes për tregun e punës
                përmes rrjetëzimit ndërkombëtar dhe bashkëpunimit me kompanitë
                dhe partnerët socialë.
              </p>
            </div>

            <div className="about-mission-image">
              <img src={students} alt="Nxënësit e shkollës" />
            </div>
          </div>
        </section>

        <section className="about-section about-priorities">
          <div className="about-section-heading">
            <span>04</span>
            <h2>Prioritetet</h2>
          </div>

          <div className="priorities-grid">
            <article className="priority">
              <div className="priority-image">
                <img src={librariImage} alt="Biblioteka e shkollës" />
              </div>

             
              <h3>Rritja e cilësisë</h3>
              <p>
                Rritja e cilësisë në institucion dhe përmirësimi i vazhdueshëm i
                procesit arsimor.
              </p>
            </article>

            <article className="priority">
              <div className="priority-image">
                <img src={javaImage} alt="Praktika profesionale" />
              </div>

             
              <h3>Partneritete aktive</h3>
              <p>
                Ndërtimi i partneriteteve aktive dhe produktive me bizneset dhe
                partnerët socialë.
              </p>
            </article>

            <article className="priority">
              <div className="priority-image">
                <img src={plastikaImage} alt="Ekonomia e gjelbër" />
              </div>

          
              <h3>Ekonomia e gjelbër</h3>
              <p>
                Promovimi i aftësive dhe praktikave që lidhen me zhvillimin e
                qëndrueshëm dhe ekonominë e gjelbër.
              </p>
            </article>
          </div>
        </section>
        <section className="about-section about-documents">
          <div className="about-section-heading">
            <span>05</span>
            <h2>Materiale udhëzuese</h2>
          </div>

          

          <div className="documents-list">
            {documents
              .slice(0, showAllDocuments ? documents.length : 3)
              .map((document, index) => (
                <a
                  className="document"
                  href={document.file}
                  download
                  key={document.title}
                >
                  <div className="document-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="document-info">
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                  </div>

                  <span className="document-download">↓</span>
                </a>
              ))}

            {!showAllDocuments && documents.length > 3 && (
              <button
                type="button"
                className="documents-load-more"
                onClick={() => setShowAllDocuments(true)}
              >
                <span>04</span>
                <strong>Shfaq më shumë</strong>
                <span>↓</span>
              </button>
            )}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
