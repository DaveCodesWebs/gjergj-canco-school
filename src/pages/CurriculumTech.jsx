import Navbar from "../components/Navbar.jsx";
import Hero2 from "../components/Hero2.jsx";
import Statistics from "../components/Statistics.jsx";
import CurriculumTimeline from "../components/CurriculumTimeline.jsx";
import CurriculumProfiles from "../components/CurriculumProfiles.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer"


import {
  Network,
  Laptop,
  Globe,
  Code2,
  Palette,
  Handshake,
} from "lucide-react";
export const tikTimeline = {
  title: "Rrugëtimi Juaj në TIK",
  description:
    "Programi zhvillohet gjatë katër viteve, duke filluar me bazat e teknologjisë dhe duke përfunduar me specializimin në profilin e zgjedhur.",

  timeline: [
   {
    year: "Viti 1",
    title: "Bazat e TIK",
    description:
      "Nxënësit njihen me konceptet themelore të teknologjisë së informacionit, kompjuterët, rrjetet, programimin bazë dhe aftësitë digjitale.",
  },
  {
    year: "Viti 2",
    title: "Thellimi i Njohurive",
    description:
      "Programi fokusohet plotësisht në TIK, duke zhvilluar aftësi në programim, databaza, rrjete, web dhe projekte praktike, si përgatitje për zgjedhjen e profilit.",
  },
  {
    year: "Viti 3",
    title: "Zgjedh Profilin",
    description:
      "Në fillim të vitit të tretë, nxënësit zgjedhin një nga profilet profesionale sipas interesave dhe aftësive të tyre, duke filluar specializimin.",
  },
  {
    year: "Viti 4",
    title: "Specializim & Diplomim",
    description:
      "Nxënësit vazhdojnë profilin e zgjedhur, zhvillojnë projekte profesionale, kryejnë praktikën dhe diplomohen me Maturën Shtetërore Profesionale.",
  },
  ],
};

export const profiles = [
  {
    title: "Rrjete të Dhënash",
    icon: Network,
    description:
      "Mëso të projektosh, instalosh, konfigurosh dhe mirëmbash rrjete kompjuterike dhe sisteme komunikimi.",
    learn: [
      "Projektim rrjetesh LAN & WAN",
      "Konfigurim routerash dhe switch-esh",
      "Administrim serverash",
      "Siguri bazë e rrjeteve",
      "Diagnostikim dhe zgjidhje problemesh",
    ],
    technologies: [
      "Cisco",
      "MikroTik",
      "Windows Server",
      "Linux",
      "TCP/IP",
      "VLAN",
      "DHCP",
      "DNS",
      "Routing & Switching",
    ],
    jobs: [
      "Administrator Rrjetesh",
      "Teknik IT",
      "Administrator Sistemi",
      "ISP Technician",
    ],
  },

  {
    title: "Mbështetje e Përdoruesve TIK",
    icon: Laptop,
    description:
      "Specializohu në mirëmbajtjen e kompjuterëve dhe ofrimin e asistencës teknike për përdoruesit.",
    learn: [
      "Instalimi i sistemeve operative",
      "Konfigurimi i kompjuterëve",
      "Diagnostikim hardware & software",
      "Mirëmbajtja e pajisjeve",
      "Mbështetje teknike për përdoruesit",
    ],
    technologies: [
      "Windows",
      "Linux",
      "Microsoft Office",
      "Active Directory",
      "BIOS/UEFI",
      "Hardware PC",
      "Printera",
      "Remote Desktop",
    ],
    jobs: [
      "IT Support Specialist",
      "Help Desk Technician",
      "Desktop Support",
      "Teknik Kompjuterësh",
    ],
  },

  {
    title: "Zhvillim Website",
    icon: Globe,
    description:
      "Mëso të krijosh faqe interneti moderne dhe aplikacione web.",
    learn: [
      "Ndërtim faqesh web",
      "Front-End Development",
      "Back-End Development",
      "Databaza",
      "Publikim faqesh në internet",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Git",
      "VS Code",
    ],
    jobs: [
      "Web Developer",
      "Front-End Developer",
      "Webmaster",
      "Freelancer",
    ],
  },

  {
    title: "Programim",
    icon: Code2,
    description:
      "Zhvillo aplikacione dhe mëso bazat e zhvillimit profesional të softuerit.",
    learn: [
      "Algoritme",
      "Struktura të dhënash",
      "Programim OOP",
      "Zhvillim aplikacionesh",
      "Zgjidhje problemesh",
    ],
    technologies: [
      "C#",
      "Java",
      "Python",
      "SQL",
      "Git",
      "Visual Studio",
      "VS Code",
    ],
    jobs: [
      "Software Developer",
      "Junior Programmer",
      "Application Developer",
      "QA Tester",
    ],
  },

  {
    title: "Multimedia",
    icon: Palette,
    description:
      "Kombino kreativitetin me teknologjinë për të krijuar përmbajtje digjitale profesionale.",
    learn: [
      "Dizajn Grafik",
      "Përpunim fotografie",
      "Montazh video",
      "Animacion",
      "Branding",
      "Përmbajtje për rrjete sociale",
    ],
    technologies: [
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "InDesign",
      "Canva",
      "Blender",
    ],
    jobs: [
      "Graphic Designer",
      "Video Editor",
      "Motion Designer",
      "Content Creator",
      "Social Media Designer",
    ],
  },

  {
    title: "Multimedia (Arsim i Dyfishtë)",
    icon: Handshake,
    description:
      "Kombino mësimin në shkollë me praktikën profesionale në kompani dhe fito përvojë reale pune.",
    learn: [
      "Dizajn Grafik",
      "Video & Animacion",
      "Projekte reale",
      "Bashkëpunim me kompani",
      "Komunikim profesional",
      "Menaxhim projektesh",
    ],
    technologies: [
      "Adobe Creative Cloud",
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
      "Canva",
      "Platforma Bashkëpunimi",
    ],
    jobs: [
      "Graphic Designer",
      "Video Editor",
      "Marketing Designer",
      "Creative Assistant",
      "Punësim në kompanitë partnere",
    ],
  },
];
export default function Curriculum(){
    return(
        <>
        <Navbar />
        <Hero2 title="tik" />
        <CurriculumTimeline title={tikTimeline.title} description={tikTimeline.description} timeline={tikTimeline.timeline} />
        <CurriculumProfiles profiles={profiles} />
        <Statistics />
        <CTA />
        <Footer />
        </>
        
    )

}