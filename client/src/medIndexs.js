// export default function SearchableItem({
//   name,
//   image,
//   price,
//   type,
//   currentCart,
// }) {
//   return (
//     <div className="contain">
//       <img src={image} id="pics"></img>
//       <div class="layer">
//         <p>{name}</p>
//         <p>{[price]}</p>
//         <p>{type}</p>
//         {/* <button id = "butt"> Add to Cart</button> */}
//       </div>
//     </div>
//   );
// }

export default function ItemAndInfo({ nameCop, imageCop, priceCop, typeCop }) {
  return (
    <div className="infoplace">
      <div className="contain">
        <img src={imageCop} alt={nameCop} />
        <p>{nameCop}</p>
        <p>{priceCop}</p>
      </div>
      <p id="specInfo">
        QRUEBH IVBA Ihkjghv giuyvuygvouygvuy giugboiuglihkjbhkweri
        caishuoiuesBVEW\ CEUBEONCweiq eowvhoi ewoivwehj vewojeacijcqipj
      </p>
      `
    </div>
  );
}
