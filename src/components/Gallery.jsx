import "./Gallery.css";

import img1 from "../assets/images/good/smiing_ppl.webp";
import img2 from "../assets/images/good/eskursion2.webp";
import img3 from "../assets/images/good/partner.webp";
import img4 from "../assets/images/good/librari_smiling .webp";
import img5 from "../assets/images/good/sporti.webp";
import img6 from "../assets/images/good/smiling certificate.webp";

import Statistics from "./Statistics";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <div className="gallery-images">
          <div className="gallery-image img1">
            <img src={img1} alt="" />
          </div>

          <div className="gallery-image img2">
            <img src={img2} alt="" />
          </div>

          <div className="gallery-image img3">
            <img src={img3} alt="" />
          </div>

          <div className="gallery-image img4">
            <img src={img4} alt="" />
          </div>

          <div className="gallery-image img5">
            <img src={img5} alt="" />
          </div>

          <div className="gallery-image img6">
            <img src={img6} alt="" />
          </div>
        </div>

        <div className="gallery-content">
          <div className="gallery-card">
            <span className="quote-mark opening">“</span>

            <h2>
              Së bashku drejt
              <br />
              një bote pune që
              <br />
              na sfidon dhe na
              <br />
              frymëzon çdo ditë.
            </h2>

            <span className="quote-mark closing">”</span>
          </div>

          <Statistics />
        </div>
      </div>
    </section>
  );
}
