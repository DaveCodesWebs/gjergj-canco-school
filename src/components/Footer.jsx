import logo from "../assets/images/hero-nav/logorm.png";

import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="footer1">
        <img
          src={logo}
          className="footer-img"
          alt="Gjergj Canco Logo"
        />

        <div className="footer-contact">
          <MapPin size={18} />
          <address className="footer-address">
            Rruga Bedri Karapici 20, Tiranë
          </address>
        </div>

        <a href="tel:+35542485858" className="footer-contact">
          <Phone size={18} />
          <span>04 248 5858</span>
        </a>

        <a
          href="mailto:info@gjergjcanco.edu.al"
          className="footer-contact"
        >
          <Mail size={18} />
          <span>info@gjergjcanco.edu.al</span>
        </a>
      </div>

      <div className="footer2">
        <ul className="nav__links">
          <li className="nav__item">
            <a className="nav__link" href="#about">
              Rreth Nesh
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#degrees">
              Degët
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#news">
              Të Rejat
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#contact">
              Kontakt
            </a>
          </li>
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
    </footer>
  );
}