import "./CurriculumTimeline.css";

export default function CurriculumTimeline({
  title,
  description,
  timeline,
}) {
  return (
    <section className="curriculum">
      <div className="curriculum-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <span>{index + 1}</span>
            </div>

            {index !== timeline.length - 1 && (
              <div className="timeline-line" />
            )}

            <div className="timeline-card">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}