export default function Card({ id, country, flagUrl, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={flagUrl} alt={`Flag of ${country}`} />
      <p className="country-name">
        Flag of <span className="country-name">{country}</span>
      </p>
    </div>
  );
}
