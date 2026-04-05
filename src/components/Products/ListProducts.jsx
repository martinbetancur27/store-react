import { useFetch } from '../../hooks/useFetch';
import Cart from '../Cart/Cart';
import NavBar from '../Navbar';
import { Link } from "react-router-dom";

function ListProducts() {
  
  const { data, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;      

  return (
    <>
    <NavBar />

    <ul id="products-list">
      {data.products.map(product => (
        <li className="product" key={product.id}>
          <span className="title">{product.title}</span>
          <span className="price">${product.price}</span>
          <span className="discount">{product.discountPercentage}% off</span>
          <span className="rating">{product.rating} ⭐</span>
          <Link to={`/product/${product.id}`} className="more">More</Link>
        </li>
      ))}
    </ul>
    </>
  );
}

export default ListProducts;