import "./PrincipalCard.css";

const staffImages = import.meta.glob(
  "../assets/images/staff/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

function getStaffImage(filename) {

  if (!filename) return "";
  const cleanFilename = filename.split("/").pop();

  const entry = Object.entries(staffImages).find(([path]) =>
    path.endsWith(`/${cleanFilename}`)
  );

  return entry ? entry[1] : null;
}

export default function PrincipalCard({ person, onClick }) {
  const image = getStaffImage(person.photo);

  const excerpt =
    person.bio.length > 900
      ? `${person.bio.slice(0, 900)}...`
      : person.bio;

  return (
    <section className="principal-profile">
      

      <div className="principal-profile-content">
        <div className="principal-profile-info">
          <p className="principal-profile-role">{person.role}</p>
          <h1>{person.name}</h1>
        </div>

        <div className="principal-profile-photo">
        {image && (
          <img
            src={image}
            alt={person.name}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

        <div className="principal-profile-bio">
          <p>{excerpt}</p>
        </div>

        <button
          type="button"
          className="principal-profile-button"
          onClick={() => onClick(person)}
        >
          Lexo me shume
          <span>›</span>
        </button>
      </div>
    </section>
  );
}