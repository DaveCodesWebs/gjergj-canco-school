import logo from "../assets/images/hero-nav/logorm.webp";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer1">
        <img src={logo} className="footer-img" alt="Gjergj Canco Logo" />

        <div className="footer-contact">
          <a
            href="https://maps.app.goo.gl/U2pezhWNF32rNaXx5"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            <MapPin size={18} />
            <address>Rruga Bedri Karapici 20, Tiranë</address>
          </a>
        </div>

        {/* <a href="tel:+355674954917" className="footer-contact">
          <Phone size={18} />
          <span>067 495 4917</span>
        </a>

        <a href="mailto:Enixhogu@yahoo.com" className="footer-contact">
          <Mail size={18} />
          <span>Enixhogu@yahoo.com</span>
        </a> */}
      </div>

      <div className="footer2">
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/rreth-nesh" className="nav__link">
              Rreth Nesh
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/apliko" className="nav__link">
              Apliko
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/organigrama" className="nav__link">
              Organigrama
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/programi-mesimor/tik" className="nav__link">
              Drejtimi TIK
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/programi-mesimor/elektroteknik" className="nav__link">
              Drejtimi Elektroteknik
            </Link>
          </li>

          {/* <li className="nav__item">
            <a className="nav__link" href="#contact">
              Kontakt
            </a>
          </li> */}
        </ul>
      </div>

      <div className="footer3">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/GjergjiCanco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/gjergj_canco_shkolla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/shkolla-teknike-gjergj-canco-14bba61a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Shkolla Gjergj Canco | Developed by{" "}
          <a
            href="https://www.linkedin.com/in/david-dundo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            David Dundo
          </a>
        </p>
      </div>
    </footer>
  );
}
