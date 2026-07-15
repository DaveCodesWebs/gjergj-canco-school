import Navbar from "../components/Navbar.jsx";
import Hero2 from "../components/Hero2.jsx";
import Statistics from "../components/Statistics.jsx";
import CurriculumTimeline from "../components/CurriculumTimeline.jsx";
import CurriculumProfiles from "../components/CurriculumProfiles.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer"

import {
  Zap,
  TowerControl,
  Bot,
  Wrench,
  Radio,
  Cog,
} from "lucide-react";
export const elektroTimeline = {
  title: "Rrugëtimi Juaj në Elektroteknikë",
  description:
    "Programi zhvillohet gjatë katër viteve, duke filluar me bazat e elektroteknikës dhe duke përfunduar me specializimin në profilin e zgjedhur.",

  timeline: [
    {
      year: "Viti 1",
      title: "Bazat e Elektroteknikës",
      description:
        "Nxënësit njihen me bazat e energjisë elektrike, elektronikës, instalimeve elektrike, matjeve dhe sigurisë në punë.",
    },
    {
      year: "Viti 2",
      title: "Thellimi i Njohurive",
      description:
        "Programi fokusohet në aftësi praktike dhe teorike në elektroteknikë, duke përgatitur nxënësit për zgjedhjen e profilit profesional.",
    },
    {
      year: "Viti 3",
      title: "Zgjedh Profilin",
      description:
        "Në fillim të vitit të tretë, nxënësit zgjedhin një nga profilet profesionale dhe fillojnë specializimin në fushën e tyre.",
    },
    {
      year: "Viti 4",
      title: "Specializim & Diplomim",
      description:
        "Nxënësit vazhdojnë profilin e zgjedhur, zhvillojnë aftësi profesionale, kryejnë praktikën dhe diplomohen me Maturën Shtetërore Profesionale.",
    },
  ],
};

export const elektroProfiles = [
  {
    title: "Instalime Elektrike Civile dhe Industriale",
    icon: Zap,
    description:
      "Specializohu në projektimin, instalimin, testimin dhe mirëmbajtjen e instalimeve elektrike në objekte civile dhe industriale.",
    learn: [
      "Instalime elektrike civile",
      "Instalime industriale",
      "Leximi i skemave elektrike",
      "Montimi i paneleve elektrike",
      "Testimi dhe mirëmbajtja e sistemeve",
    ],
    technologies: [
      "AutoCAD Electrical",
      "Multimetër",
      "Tester Izolimi",
      "PLC Bazike",
      "Kontaktorë",
      "Siguresa",
      "Motorë Elektrikë",
      "Pajisje Mbrojtëse",
    ],
    jobs: [
      "Elektricist",
      "Teknik Instalimesh",
      "Mirëmbajtës Industrial",
      "Vetëpunësim",
    ],
  },

  {
    title: "Instalim dhe Mirëmbajtje të Linjave TU, TM dhe TL",
    icon: TowerControl,
    description:
      "Mëso instalimin dhe mirëmbajtjen e rrjeteve të shpërndarjes dhe transmetimit të energjisë elektrike.",
    learn: [
      "Linja TU, TM dhe TL",
      "Montim linjash elektrike",
      "Mirëmbajtje e rrjeteve",
      "Siguria në tension",
      "Diagnostikim i defekteve",
    ],
    technologies: [
      "Transformatorë",
      "Nënstacione",
      "Kabllo Energjie",
      "Multimetër",
      "Pajisje Matëse",
      "PPE",
      "Sisteme Shpërndarjeje",
    ],
    jobs: [
      "Teknik i Linjave Elektrike",
      "Operator Energjetik",
      "Teknik Mirëmbajtjeje",
      "Kompani Energjitike",
    ],
  },

  {
    title: "Teknologji Automatizimi",
    icon: Bot,
    description:
      "Mëso të instalosh, programosh dhe mirëmbash sisteme moderne të automatizimit industrial.",
    learn: [
      "Automatizim industrial",
      "Sensorë dhe aktuatorë",
      "Programim PLC",
      "Kontroll procesesh",
      "Mirëmbajtje sistemesh",
    ],
    technologies: [
      "Siemens PLC",
      "LOGO!",
      "TIA Portal",
      "SCADA",
      "HMI",
      "Sensorë",
      "Pneumatikë",
      "Motorë Elektrikë",
    ],
    jobs: [
      "Automation Technician",
      "PLC Technician",
      "Industrial Maintenance",
      "Automation Specialist",
    ],
  },

  {
    title: "Riparime të Pajisjeve Elektronike",
    icon: Wrench,
    description:
      "Specializohu në diagnostikimin, mirëmbajtjen dhe riparimin e pajisjeve elektronike.",
    learn: [
      "Diagnostikim elektronik",
      "Riparim qarqesh",
      "Saldim elektronik",
      "Leximi i skemave",
      "Testim komponentësh",
    ],
    technologies: [
      "Osciloskop",
      "Multimetër",
      "Stacion Saldimi",
      "Breadboard",
      "Arduino",
      "Komponentë Elektronikë",
    ],
    jobs: [
      "Teknik Elektronik",
      "Teknik Servisi",
      "Repair Technician",
      "Teknik Pajisjesh Elektronike",
    ],
  },

  {
    title: "Telekomunikacion",
    icon: Radio,
    description:
      "Mëso instalimin dhe mirëmbajtjen e sistemeve moderne të telekomunikacionit dhe rrjeteve të komunikimit.",
    learn: [
      "Rrjete komunikimi",
      "Transmetim të dhënash",
      "Fibër optike",
      "Pajisje telekomunikacioni",
      "Konfigurim sistemesh",
    ],
    technologies: [
      "Fiber Optic",
      "Cisco",
      "MikroTik",
      "TCP/IP",
      "Radio Links",
      "Switches",
      "Routers",
    ],
    jobs: [
      "Telecommunications Technician",
      "Network Technician",
      "ISP Technician",
      "Field Engineer",
    ],
  },

  {
    title: "Elektroteknikë",
    icon: Cog,
    description:
      "Zhvillo njohuri të avancuara mbi sistemet elektrike, elektromekanike dhe pajisjet industriale.",
    learn: [
      "Instalime elektrike",
      "Makina elektrike",
      "Sisteme energjetike",
      "Elektromekanikë",
      "Mirëmbajtje industriale",
    ],
    technologies: [
      "Motorë Elektrikë",
      "Transformatorë",
      "PLC",
      "AutoCAD Electrical",
      "Multimetër",
      "Relé",
      "Kontaktorë",
    ],
    jobs: [
      "Teknik Elektroteknik",
      "Teknik Industrial",
      "Mirëmbajtës Elektrik",
      "Teknik Energjie",
    ],
  },
];


export default function CurriculumElec() {
   return(
           <>
           <Navbar />
           <Hero2 type="Elektroteknik"/>
           <CurriculumTimeline title={elektroTimeline.title} description={elektroTimeline.description} timeline={elektroTimeline.timeline} />
           <CurriculumProfiles profiles={elektroProfiles} />
           <Statistics />
           <CTA />
           <Footer />
           </>
           
       )
}