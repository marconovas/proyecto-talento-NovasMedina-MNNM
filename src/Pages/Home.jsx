import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"
import Sections from "../Components/Sections.jsx";
import Featured from "../Components/Featured.jsx";
import Benefits from "../Components/Benefits.jsx";
import NewsLetter from "../Components/NewsLetter.jsx";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartProvider.jsx";

function Home() {
    const { products } = useCart();

    return (
        <div>
            <Header />
            <Hero products={products} />
            <Sections products={products} />
            <Featured products={products} />
            <Benefits />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;
