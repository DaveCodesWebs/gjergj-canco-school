import "./StaffModal.css";

const staffImages = import.meta.glob(
  "../assets/images/staff/*.{webp,jpg,jpeg,png,jfif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

function getStaffImage(filename) {
  const entry = Object.entries(staffImages).find(([path]) =>
    path.endsWith(`/${filename.split("/").pop()}`),
  );

  return entry ? entry[1] : "";
}

export default function StaffModal({ person, onClose }) {
  if (!person) {
    return null;
  }

  return (
    <div className="staff-modal-overlay" onClick={onClose}>
      <div
        className="staff-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="staff-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Mbyll"
        >
          ×
        </button>

        <div className="staff-modal-content">
          <div className="staff-modal-photo">
            <img
              src={getStaffImage(person.photo)}
              alt={person.name}
            />
          </div>

          <div className="staff-modal-info">
            <p className="staff-modal-role">{person.role}</p>
            <h2>{person.name}</h2>

            <div className="staff-modal-bio">
              <p>{person.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}