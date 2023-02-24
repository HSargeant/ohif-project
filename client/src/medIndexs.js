export default function ItemAndInfo({ nameCop, imageCop, ageCop, sexCop }) {
  return (
    <div className="infoplace">
      <div className="contain">
        <img src={imageCop} alt={nameCop} id="pics" />
        {/* <p>{nameCop}</p> */}
      </div>
      
      <div style={{display:"inline-block"}}>
        <p id="specifInfo">{nameCop}</p>
        <p id="specifInfo">{"Age: " + ageCop}</p>
        <p id="specifInfo">{"Sex: " +sexCop}</p>
      </div>
      
    </div>
  );
}
