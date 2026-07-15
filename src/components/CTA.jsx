import "./CTA.css";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function CTA() {
  const navigate = useNavigate();
  return (
    <section className="cta-section">
      <div className="cta-container">

        <span className="cta-label">
          Bëhu pjesë e së ardhmes
        </span>

        <h2>
          Fillo rrugëtimin tënd profesional
          <br />
          në Gjergj Canco.
        </h2>

        

        <div className="cta-buttons">
          <button className="apply" onClick={() => navigate("/apliko")}>
            Apliko Tani
          </button>

          <button className="contact" onClick={() => navigate("/kontakt")}>
            
  Na Kontakto
  <Phone className="phone-icon" size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}