export default function ItemAndInfo({ nameCop, imageCop }) {
  return (
    <div className="infoplace">
      <div className="contain">
        <img src={imageCop} alt={nameCop} id="pics" />
        <p>{nameCop}</p>
        {/* <p>{priceCop}</p> */}
      </div>
      <p id="specifInfo">{nameCop}</p>
    </div>
  );
}
export function SearchableItem({ name, image }) {
  return (
    <div className="contain">
      <img src={image} id="pics" width="300px"></img>
      <div class="layer">
        <p>{name}</p>
      </div>
    </div>
  );
}

// export function ListCart(params) {

// }
