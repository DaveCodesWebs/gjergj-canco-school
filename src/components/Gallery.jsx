import "./Gallery.css";

import galleryImage from "../assets/images/gallery/gallery-img.webp";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <div className="gallery-image-container">
          <img
            src={galleryImage}
            alt="Aktivitete dhe nxenes te shkolles"
            className="gallery-main-image"
          />

          <div className="gallery-overlay" />

          <div className="gallery-content">
            <div className="gallery-card">
              <span className="quote-mark opening">“</span>


              <h2>
                Së bashku drejt
               
                një bote pune që
              
                na sfidon dhe na
             
                frymëzon çdo ditë.
              </h2>

              <span className="quote-mark closing">”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}