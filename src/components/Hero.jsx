import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroBackground from "../assets/images/hero-nav/shkolla.webp?url";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const typingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Teknologji?", "Praktikë?", "Inovacion?"],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
   <div
  className="hero"
  style={{
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="hero-content">
    <div className="hero-title">
      <h1>
        Kërkoni <span ref={typingRef} id="typing"></span>
      </h1>

      <h2 className="sub-text">
        Atëherë, Jeni në duar të sigurta!
      </h2>
    </div>

    
  </div>
</div>
  );
}
