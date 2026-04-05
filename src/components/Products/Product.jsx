import NavBar from '../Navbar';
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import AddCart from '../Cart/AddCart';

function Product() {

  const { id } = useParams();
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    
       <>
        <NavBar />
        <div id="product-details">
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
          <p>Price: ${data.price}</p>
          <p>Discount: {data.discountPercentage}% off</p>
          <p>Rating: {data.rating} ⭐</p>
          <AddCart product={data} />
        </div>
       </>
  )
}

export default Product;