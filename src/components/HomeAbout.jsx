import "./HomeAbout.css";
import schoolImage from "../assets/images/good/two buddies.webp";
import { useNavigate } from "react-router-dom";
export default function HomeAbout() {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="about-subtitle">Rreth Nesh</span>

          <h2>
            Shkolla Teknike Elektrike
            <br />
            "Gjergj Canco"
          </h2>

          <p>
            Shkolla Teknike Elektrike "Gjergj Canco" është një nga institucionet
            kryesore të arsimit profesional në Shqipëri, me qindra nxënës që
            ndjekin çdo vit programet e saj në fushën e Teknologjisë së
            Informacionit dhe Komunikimit (TIK) dhe Elektroteknikës.
          </p>

          <p>
            Arsimi profesional në shkollën tonë kombinon njohuritë teorike me
            praktikën profesionale, duke i përgatitur të rinjtë për tregun e
            punës dhe për studime të mëtejshme. Përmes laboratorëve modernë,
            praktikave në biznes dhe pjesëmarrjes në projekte kombëtare e
            ndërkombëtare, nxënësit zhvillojnë aftësi konkrete dhe të kërkuara
            nga punëdhënësit.
          </p>

          <div className="about-highlights">
            <div>✓ Laboratorë Modernë</div>
            <div>✓ Praktikë në Biznes</div>
            <div>✓ Projekte Ndërkombëtare</div>
          </div>

          <button className="more margin-top" onClick={() => navigate(`/rreth-nesh`)}>
            Lexo më shumë rreth nesh →
          </button>
        </div>

        

        <div className="about-image">
          <img src={schoolImage} alt="Shkolla Gjergj Canco" />
        </div>
      </div>
    </section>
  );
}
