import { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroBackground from "../assets/images/hero-nav/shkolla.webp?url";

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Teknologji?", "Praktike?", "Inovacion?"],
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
      <div className="hero-title">
        <h1>
          Kerkoni <span ref={typingRef} id="typing"></span>
        </h1>

        <h2 className="sub-text">Atehere, Jeni ne duar te sigurta!</h2>
      </div>
    </div>
  );
}
