import Navbar from "./components/Navbar";

function Home() {

  return (
       <>
        <Navbar />
        <h1>Your Welcome</h1>
        <h3>Here you can find the best products for you</h3>
        <div className="home-images">
          <img id="shopping-image" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/13/16630884605041.jpg" alt="shopping" />
          <img id="shopping-image" src="https://generasonrapfr.com/wp-content/uploads/2023/08/Neymar_PSG_2023-24_2-scaled.webp" alt="shopping" />
        </div>
       </>
  )
}

export default Home;