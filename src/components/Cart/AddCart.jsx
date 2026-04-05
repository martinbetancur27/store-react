import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function AddCart( { product } ) {
    console.log(useContext(CartContext));
    const { addToCart } = useContext(CartContext);


    return (
        <button className="btn-add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    )
}   

export default AddCart;