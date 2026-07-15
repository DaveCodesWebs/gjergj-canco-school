import { useEffect, useState } from "react";
import "./Statistics.css";

function Stat({ number, label, suffix = "+" }) {
  const [count, setCount] = useState(0);

 useEffect(() => {
  const timeout = setTimeout(() => {
    let startTime = null;
    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    requestAnimationFrame(animate);
  }, 1000); // Match your card animation duration

  return () => clearTimeout(timeout);
}, [number]);

  return (
    <div className="stat">
      <h2>
        {count}{suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <Stat number={64} label="Mësues të Certifikuar" />
        <div className="divider"></div>

        <Stat number={146} label="Kompani Partnere" />
        <div className="divider"></div>

        <Stat number={70} label="e të Diplomuarve Punësohen" suffix="%" />
        <div className="divider"></div>

        <Stat number={12} label="Profile Profesionale" suffix="" />
      </div>
    </section>
  );
}