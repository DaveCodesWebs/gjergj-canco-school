import logo from "../assets/images/hero-nav/logorm.png";
import "./CTA.css";
import { Phone, ChevronDown } from "lucide-react";
import { Link , useNavigate} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/" style={{ cursor: "pointer" }}>
      <img src={logo} alt="school-logo" className="nav__logo" />
       </Link>
      <ul className="nav__links">
        

        <li className="nav__item">
          <Link to="/apliko" className="nav__link">
            Apliko
          </Link>
        </li>

        <li className="nav__item nav__dropdown">
          <button className="nav__link dropdown-btn">
            Kurrikula
            <ChevronDown size={16} />
          </button>

          <div className="dropdown-menu">
            <Link to="/kurrikula/tik">TIK</Link>
            <Link to="/kurrikula/elektroteknik">Elektroteknikë</Link>
          </div>
        </li>

        <li className="nav__item">
          <button className="contact" onClick={() => navigate("/kontakt")}>
            Na Kontaktoni
            <Phone className="phone-icon" size={18} />
          </button>
        </li>
      </ul>
    </nav>
  );
}