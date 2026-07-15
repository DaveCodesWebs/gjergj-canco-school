import Navbar from "../components/Navbar";
export default function Contact() {
  return (
    <>
    <Navbar />
      <ContactHero />
      
    </>
  );
}

import "./Contact.css";

import bg from "../assets/images/hero-nav/shkolla.png";

export function ContactHero() {
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="contact-overlay"></div>

     <div className="contact-card">
  <div className="contact-left">
    <h1>Na Kontaktoni</h1>

    <p>
      Keni pyetje rreth pranimeve, profileve apo jetës në shkollë?
      Plotësoni formularin dhe do t'ju përgjigjemi sa më shpejt.
    </p>

    <ContactForm />

    <ContactInfo />
  </div>

  <div className="contact-right">
    <iframe
      title="Gjergj Canco"
      src="https://www.google.com/maps?q=Shkolla+Teknike+Elektrike+Gjergj+Canco,+Tiran%C3%AB&output=embed"
      loading="lazy"
      allowFullScreen
    />
  </div>
</div>
    </section>
  );
}

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="info-item">
        <Phone />
        <div>
          <h4>Telefon</h4>
          <a
            href="tel:+35542485858"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            04 248 5858
          </a>
        </div>
      </div>

      <div className="info-item">
        <Mail />
        <div>
          <h4>Email</h4>
          <a
            href="mailto:hazelaze312@gmail.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            hazelaze312@gmail.com
          </a>
        </div>
      </div>

      <div className="info-item">
        <MapPin />
        <div>
          <h4>Adresa</h4>
          <p>Shkolla Teknike Elektrike "Gjergj Canco", Tiranë</p>
        </div>
      </div>

      <div className="info-item">
        <Clock />
        <div>
          <h4>Orari</h4>
          <p>E Hënë - E Premte</p>
          <p>08:00 - 16:00</p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // EmailJS goes here

    console.log(form);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="double-input">
        <input
          placeholder="Emri"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <input
          placeholder="Mbiemri"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <input
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        placeholder="Numri i Telefonit"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        placeholder="Subjekti"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <textarea
        rows="6"
        placeholder="Mesazhi..."
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Dërgo Mesazhin</button>
    </form>
  );
}

export function ContactMap() {
  return (
    <section className="contact-map">
      <iframe
        title="Gjergj Canco"
        src="https://www.google.com/maps?q=Shkolla+Teknike+Elektrike+Gjergj+Canco,+Tiran%C3%AB&output=embed"
        loading="lazy"
        allowFullScreen
      />
    </section>
  );
}
