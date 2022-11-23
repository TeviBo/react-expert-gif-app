export const GifItem = ({ title, url }) => {
  if (title.trim() === "") {
    title = "Sin titulo";
  }
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
