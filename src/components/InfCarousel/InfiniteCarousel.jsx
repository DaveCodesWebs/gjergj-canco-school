import "./InfCarousel.css";

export default function InfiniteCarousel({
  images,
  speed = 30,
}) {
  const items = Object.values(images);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((image, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={image.default}
              alt=""
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}