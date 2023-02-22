export default function ItemAndInfo({ nameCop, imageCop }) {
  return (
    <div className="infoplace">
      <div className="contain">
        <img src={imageCop} alt={nameCop} id="pics" />
        <p>{nameCop}</p>
      </div>
      <p id="specifInfo">{nameCop}</p>
    </div>
  );
}
