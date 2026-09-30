import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import staff from "../data/staff_updated_ordered.json";
import "./Staff.css";

import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import PrincipalCard from "../components/PrincipalCard";
import StaffModal from "../components/StaffModal";
import CTA from "../components/CTA";

const staffImages = import.meta.glob(
  "../assets/images/staff/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getStaffImage(filename) {
  if (!filename) return "";

  const entry = Object.entries(staffImages).find(([path]) =>
    path.endsWith(`/${filename.split("/").pop()}`),
  );

  return entry ? entry[1] : "";
}

const allStaff = [
  staff.principal,
  ...staff.vicePrincipals,
  ...staff.departments.generalCulture,
  ...staff.departments.ict,
  ...staff.departments.electrotechnics,
  ...staff.secretary,
];

function Principal({ person }) {
  return (
    <article className="staff-principal">
      <PrincipalCard person={person} />
    </article>
  );
}

function ManagementMember({ person, onClick }) {
  return (
    <article className="staff-management">
      <div className="staff-management-photo">
        {getStaffImage(person.photo) ? (
          <img
            src={getStaffImage(person.photo)}
            alt={person.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="staff-photo-skeleton">Nuk ka imazh</div>
        )}
      </div>

      <div className="staff-management-info">
        <p className="staff-role">{person.role}</p>
        <h3>{person.name}</h3>

        <button type="button" onClick={() => onClick(person)}>
          Lexo me shume
        </button>
      </div>
    </article>
  );
}

function Teacher({ person, onClick }) {
  return (
    <article className="staff-teacher">
      <div className="staff-teacher-photo">
        {getStaffImage(person.photo) ? (
          <img
            src={getStaffImage(person.photo)}
            alt={person.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="staff-photo-skeleton">Nuk ka imazh</div>
        )}
      </div>

      <div className="staff-teacher-info">
        <h3>{person.name}</h3>
        <p>{person.role}</p>

        <button type="button" onClick={() => onClick(person)}>
          Lexo me shume
        </button>
      </div>
    </article>
  );
}

function Department({ title, people, onClick }) {
  return (
    <section className="staff-section">
      <h2>{title}</h2>

      <div className="staff-teachers">
        {people.map((person) => (
          <Teacher key={person.id} person={person} onClick={onClick} />
        ))}
      </div>
    </section>
  );
}

export default function Staff() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const staffId = params.get("staff");

    if (!staffId) {
      setSelectedStaff(null);
      return;
    }

    const person = allStaff.find(
      (person) => String(person.id) === staffId,
    );

    setSelectedStaff(person || null);
  }, [location.search]);

  function openStaff(person) {
    navigate(
      `/organigrama?staff=${encodeURIComponent(person.id)}`,
    );
  }

  function closeStaff() {
    navigate("/organigrama", { replace: true });
  }

  return (
    <div>
      <Navbar />

      <Hero2 title="Organigrama" />

      <main className="staff-page">
        <section className="staff-section">
          <h2 className="drejtoria-title">Drejtoria</h2>

          <div className="staff-principal">
            <PrincipalCard
              person={staff.principal}
              onClick={openStaff}
            />
          </div>

          <div className="staff-management-list">
            {staff.vicePrincipals.map((person) => (
              <ManagementMember
                key={person.id}
                person={person}
                onClick={openStaff}
              />
            ))}
          </div>
        </section>

        <Department
          title="Departamenti i Kulturës së Përgjithshme"
          people={staff.departments.generalCulture}
          onClick={openStaff}
        />

        <Department
          title="Departamenti i Teknologjisë së Informacionit dhe Komunikimit"
          people={staff.departments.ict}
          onClick={openStaff}
        />

        <Department
          title="Departamenti i Elektroteknikës"
          people={staff.departments.electrotechnics}
          onClick={openStaff}
        />

        <section className="staff-section">
          <h2>Shërbimet Mbështetëse</h2>

          <div className="staff-management-list">
            {staff.secretary.map((person) => (
              <ManagementMember
                key={person.id}
                person={person}
                onClick={openStaff}
              />
            ))}
          </div>
        </section>

        {selectedStaff && (
          <StaffModal
            person={selectedStaff}
            onClose={closeStaff}
          />
        )}

        <CTA />
      </main>

      <Footer />
    </div>
  );
}