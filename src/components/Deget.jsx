import "./Deget.css";
import QualificationCard from "./DegeCard";

import tikImage from "../assets/images/Electronics/e.webp";
import elektroImage from "../assets/images/Electronics/elektronik1.webp";

export default function Deget() {
  return (
    <section className="qualifications-section">
      <QualificationCard
        title="Teknologji Informacioni dhe Komunikimi"
        image={tikImage}
        description="Kualifikimi në Teknologji Informacioni dhe Komunikimi (TIK) u ofron nxënësve njohuri teorike dhe praktike në fushën e teknologjisë, duke i përgatitur për studime të mëtejshme dhe një karrierë në sektorin e IT-së."
        tags={[
          "Programim",
          "Zhvillim Website",
          "Rrjete Kompjuterike",
          "Multimedia",
          "Mbështetje IT",
        ]}
      />

      <QualificationCard
        title="Elektroteknikë"
        image={elektroImage}
        description="Kualifikimi në Elektroteknikë i pajis nxënësit me njohuri dhe aftësi në instalime elektrike, elektronikë dhe sisteme moderne energjetike."
        tags={[
          "Instalime Elektrike",
          "Automatizim",
          "Telekomunikacion",
          "Riparime Elektronike",
          "Sisteme Energjetike",
        ]}
        type="elektroteknik"
      />
    </section>
  );
}
