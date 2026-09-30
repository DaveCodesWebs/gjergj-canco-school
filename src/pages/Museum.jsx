import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import Hero2 from "../components/Hero2.jsx";
import Statistics from "../components/Statistics.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

import museumItems from "../data/muzeu.json";

import "./Museum.css";

const FEATURE_DURATION = 7000;

import heroImg from "../assets/images/muzeu/muzeu-rrjedha.webp";

const museumImages = import.meta.glob(
  "../assets/images/muzeu/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getMuseumImage(filename) {
  if (!filename) return null;

  const cleanFilename = filename.split("/").pop();

  const entry = Object.entries(museumImages).find(([path]) =>
    path.endsWith(`/${cleanFilename}`),
  );

  return entry ? entry[1] : null;
}

const featuredItems = museumItems.slice(0, 3);
const collectionItems = museumItems.slice(3);

export default function Museum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % featuredItems.length);
    }, FEATURE_DURATION);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const activeItem = featuredItems[activeIndex];

  function selectFeatured(index) {
    setActiveIndex(index);
  }

  function toggleCollectionItem(id) {
    setOpenItem((current) => (current === id ? null : id));
  }

  return (
    <>
      <Navbar />

      <Hero2 title="Salla Muzeale" backgroundImage={heroImg} />

      <main className="museum-page">
        <section className="museum-featured">
          <div className="museum-heading">
            <h1>Pajisjet e muzeut</h1>

            <div className="museum-progress">
              <span key={activeIndex} />
            </div>
          </div>

          <div className="museum-featured-images">
            {featuredItems.map((item, index) => {
              const image = getMuseumImage(item.image);
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`featured-image ${isActive ? "active" : ""}`}
                  onClick={() => selectFeatured(index)}
                  aria-label={`Shfaq ${item.title}`}
                  aria-pressed={isActive}
                >
                  {image ? (
                    <img src={image} alt={item.title} />
                  ) : (
                    <div className="image-missing">IMAZHI MUNGON</div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="featured-information">
            <div className="featured-description">
              <span className="item-number">0{activeItem.id}</span>

              <h2>{activeItem.title}</h2>

              <p>{activeItem.description}</p>
            </div>

            <div className="featured-specifications">
              <div>
                <span>Prodhuesi</span>
                <strong>{activeItem.manufacturer || "—"}</strong>
              </div>

              <div>
                <span>Viti</span>
                <strong>{activeItem.year || "—"}</strong>
              </div>

              <div>
                <span>Funksioni</span>
                <strong>{activeItem.function || "—"}</strong>
              </div>

              <div>
                <span>Specifikimet</span>
                <strong>
                  {activeItem.specifications?.length
                    ? activeItem.specifications.join(" · ")
                    : "—"}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="museum-collection">
          <div className="collection-heading">
            <span>Pajisje të tjera</span>
            <h2>Koleksioni</h2>
          </div>

          <div className="collection-grid">
            {collectionItems.map((item) => {
              const image = getMuseumImage(item.image);
              const isOpen = openItem === item.id;

              return (
                <article
                  key={item.id}
                  className={`collection-card ${isOpen ? "open" : ""}`}
                >
                  <div className="collection-image">
                    {image ? (
                      <img src={image} alt={item.title} />
                    ) : (
                      <div className="image-missing">IMAGE MISSING</div>
                    )}
                  </div>

                  <div className="collection-card-content">
                    

                    <h3>{item.title}</h3>

                    <button
                      type="button"
                      onClick={() => toggleCollectionItem(item.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? "Mbyll" : "Lexo më shumë"}

                      {isOpen ? (
                        <ChevronDown size={16} className="rotate" />
                      ) : (
                        <ArrowRight size={16} />
                      )}
                    </button>

                    <div className="collection-details">
                      {item.description && <p>{item.description}</p>}

                      {item.function && <p>{item.function}</p>}

                      {item.specifications?.length > 0 && (
                        <p>{item.specifications.join(" · ")}</p>
                      )}

                      {item.museumSignificance?.length > 0 && (
                        <>
                          {item.museumSignificance.map((text, index) => (
                            <p key={index}>{text}</p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
