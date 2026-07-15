import "./DegeCard.css";
import { useNavigate } from "react-router-dom";
export default function DegeCard({
  title,
  description,
  image,
  tags,
  buttonText = "Mëso më shumë →",
  type = "tik",
}) {
  const navigate = useNavigate();
  return (
    <div
      className="qualification-card"
      
    >
        <img src={image} className="qualification-bg" alt="" />
      <div className="qualification-overlay" />

      <div className="qualification-content">
        <h2>{title}</h2>

        <div className="qualification-details">
          <p>{description}</p>

          <div className="qualification-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button className="more" onClick={() => navigate(`/kurrikula/${type}`)}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}