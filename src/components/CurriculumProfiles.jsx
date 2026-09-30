import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CurriculumProfiles.css";

export default function CurriculumProfiles({ profiles }) {
  const [selected, setSelected] = useState(0);

  const profile = profiles[selected];
  const Icon = profile.icon;

  const prev = () => setSelected((s) => (s - 1 + profiles.length) % profiles.length);
  const next = () => setSelected((s) => (s + 1) % profiles.length);

  return (
    <section className="profiles">

      <div className="profiles-header">
        <h2>Zgjidh Profilin Tënd</h2>
        <p>
          Në vitin e tretë specializohesh në profilin që përputhet me
          interesat dhe objektivat e tua.
        </p>
      </div>

      {/* ── Desktop / Tablet: sidebar + content ── */}
      <div className="profiles-dashboard">

        <aside className="profiles-sidebar">
          {profiles.map((item, index) => {
            const SidebarIcon = item.icon;
            return (
              <button
                key={item.title}
                className={`profile-tab ${selected === index ? "active" : ""}`}
                onClick={() => setSelected(index)}
              >
                <SidebarIcon size={22} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </aside>

        <ProfileContent profile={profile} Icon={Icon} />
      </div>

      {/* ── Mobile: arrow navigation ── */}
      <div className="profiles-mobile">

        <div className="mobile-nav-bar">
          <button className="mobile-arrow" onClick={prev} aria-label="Profili i mëparshëm">
            <ChevronLeft size={22} />
          </button>

          <div className="mobile-nav-info">
            <Icon size={20} />
            <span className="mobile-nav-title">{profile.title}</span>
          </div>

          <button className="mobile-arrow" onClick={next} aria-label="Profili i ardhshëm">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mobile-dots">
          {profiles.map((_, i) => (
            <button
              key={i}
              className={`mobile-dot ${i === selected ? "active" : ""}`}
              onClick={() => setSelected(i)}
              aria-label={`Profili ${i + 1}`}
            />
          ))}
        </div>

        <ProfileContent profile={profile} Icon={Icon} />
      </div>

    </section>
  );
}

function ProfileContent({ profile, Icon }) {
  return (
    <div className="profile-content">

      <div className="profile-title">
        <Icon size={34} />
        <h3>{profile.title}</h3>
      </div>

      <p className="profile-description">{profile.description}</p>

      <div className="content-section">
        <h4>Çfarë do të mësosh</h4>
        <ul>
          {profile.learn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="content-section">
        <h4>Teknologji &amp; Mjete</h4>
        <div className="tech-list">
          {profile.technologies.map((tech) => (
            <span key={tech} className="tech">{tech}</span>
          ))}
        </div>
      </div>

      <div className="content-section">
        <h4>Mundësi Punësimi</h4>
        <ul>
          {profile.jobs.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}