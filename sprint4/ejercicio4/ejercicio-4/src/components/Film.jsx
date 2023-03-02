export default function Film({ name, year, image, rating }) {
  return (
    <div id="film">
      <p className="file-name">
        {name} {year}
      </p>
      <p className={`rating ${rating}`}>{rating}</p>
      <img src={image} alt="" className="film-image" />
    </div>
  );
}
