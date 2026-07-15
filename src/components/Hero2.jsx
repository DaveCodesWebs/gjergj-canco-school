import "./Hero2.css";
import heroBackground from "../assets/images/hero-nav/shkolla.png?url";

export default function Hero2({ type = "tik" }) {
  return (
    <div
      className="hero2"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="hero-content2">
        <h1>
          KURRIKULA -{" "}
          <span>{type === "tik" ? "TIK" : "ELEKTROTEKNIK"}</span>
        </h1>
      </div>
    </div>
  );
}