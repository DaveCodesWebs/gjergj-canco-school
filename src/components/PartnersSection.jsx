import InfiniteCarousel from "./InfCarousel/InfiniteCarousel";

const partners = import.meta.glob(
  "../assets/partners/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  }
);

export default function PartnersSection() {
  return (
    <section className="section section--1" id="section--1">
      <div className="section-title">
        <span>PARTNERËT</span>
        <h2>Partnerët Tanë</h2>
      </div>

      
        <InfiniteCarousel images={partners} speed={50} />
      
    </section>
  );
}