import Navbar from "../components/Navbar";
import "./Apply.css";

import heroBg from "../assets/images/hero-nav/shkolla.png";
import {
  ArrowRight,
  LogIn,
  Search,
  FileText,
  School,
  GraduationCap,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: <LogIn size={22} />,
    title: "Hyni në e-Albania",
    text: "Identifikohuni në llogarinë tuaj.",
  },
  {
    icon: <Search size={22} />,
    title: "Gjeni Shërbimin",
    text: 'Kërkoni "Regjistrimi në klasën e dhjetë".',
  },
  {
    icon: <FileText size={22} />,
    title: "Plotësoni Formularin",
    text: "Vendosni të dhënat personale.",
  },
  {
    icon: <School size={22} />,
    title: "Zgjidhni Shkollën",
    text: 'Shkolla Teknike Elektrike "Gjergj Canco".',
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Zgjidhni Drejtimin",
    text: "TIK ose Elektroteknikë.",
  },
  {
    icon: <Send size={22} />,
    title: "Dërgoni Aplikimin",
    text: "Konfirmoni dhe ruani aplikimin.",
  },
];

export default function Apply() {
  return (
    <>
      <Navbar />

      <section
        className="apply-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="apply-overlay" />

        <div className="apply-card">

          <div className="apply-left">

            <span className="badge">
              Regjistrimet janë të hapura
            </span>

            <h1>Regjistrimet për Klasën e 10-të</h1>

            <p>
              Filloni rrugëtimin tuaj drejt një karriere profesionale në
              Shkollën Teknike Elektrike "Gjergj Canco".
            </p>

            <p>
              Aplikimi kryhet tërësisht online në portalin zyrtar
              <strong> e-Albania.</strong>
            </p>

            <div className="study-box">

              <h3>Drejtimet</h3>

              <div className="study-tags">
                <span>💻 TIK</span>
                <span>⚡ Elektroteknikë</span>
              </div>

            </div>

            <a
              href="https://e-albania.al"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-btn"
            >
              Apliko në e-Albania
              <ArrowRight size={18} />
            </a>

          </div>

          <div className="apply-right">

            <h2>Si të Aplikoni</h2>

            <div className="steps">

              {steps.map((step, index) => (
                <div
                  className="step"
                  key={step.title}
                >
                  <div className="step-number">
                    {index + 1}
                  </div>

                  <div className="step-icon">
                    {step.icon}
                  </div>

                  <div>

                    <h4>{step.title}</h4>

                    <p>{step.text}</p>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}