export default function SearchableItem({name, image, price, type, currentCart}) {
    return (
        <div className = "contain">
            <img src={image} id="pics" width="300px"></img>
                <div  class = "layer">
                    <p>{name}</p>
                    {/* <p>{[price]}</p>
                    <p>{type}</p> */}
                    {/* <button id = "butt"> Add to Cart</button> */}
                </div>
            </div>
    )
}

// export function ListCart(params) {
    
// }