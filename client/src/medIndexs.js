export default function ItemAndInfo({ nameCop, imageCop, ageCop, sexCop }) {
  return (
    <div className="infoplace">
      <div className="contain">
        <img src={imageCop} alt={nameCop} id="pics" />
      </div>
      
      <div style={{display:"inline-block"}}>
        <p className="specifInfo">{"Patient ID: "+ nameCop}</p>
        <p className="specifInfo1">{"Age: " + ageCop}</p>
        <p className="specifInfo2">{"Sex: " +sexCop}</p>
      </div>
    </div>
  );
}
