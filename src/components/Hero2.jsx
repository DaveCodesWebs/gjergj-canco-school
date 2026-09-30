import "./Hero2.css";
import defaultHeroBackground from "../assets/images/hero-nav/shkolla.webp?url";

export default function Hero2({
  title,
  type,
  backgroundImage = defaultHeroBackground,
}) {
  return (
    <div
      className="hero2"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content2">
        {type ? (
          <h1>
            {title}{" "}
            <span>
              {type === "tik" ? "TIK" : "ELEKTROTEKNIK"}
            </span>
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
    </div>
  );
}