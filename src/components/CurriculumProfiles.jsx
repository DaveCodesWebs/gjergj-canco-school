import { useState } from "react";


import "./CurriculumProfiles.css";


export default function CurriculumProfiles({ profiles }) {
  const [selected, setSelected] = useState(0);

  const profile = profiles[selected];
  const Icon = profile.icon;

  return (
    <section className="profiles">

      <div className="profiles-header">
        <h2>Zgjidh Profilin Tënd</h2>
        <p>
          Në vitin e tretë specializohesh në profilin që përputhet me
          interesat dhe objektivat e tua.
        </p>
      </div>

      <div className="profiles-dashboard">

        <aside className="profiles-sidebar">
          {profiles.map((item, index) => {
            const SidebarIcon = item.icon;

            return (
              <button
                key={item.title}
                className={`profile-tab ${
                  selected === index ? "active" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <SidebarIcon size={22} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </aside>

        <div className="profile-content">

          <div className="profile-title">
            <Icon size={34} />
            <h3>{profile.title}</h3>
          </div>

          <p className="profile-description">
            {profile.description}
          </p>

          <div className="content-section">
            <h4>Çfarë do të mësosh</h4>

            <ul>
              {profile.learn.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="content-section">
            <h4>Teknologji & Mjete</h4>

            <div className="tech-list">
              {profile.technologies.map((tech) => (
                <span key={tech} className="tech">
                  {tech}
                </span>
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

      </div>

    </section>
  );
}