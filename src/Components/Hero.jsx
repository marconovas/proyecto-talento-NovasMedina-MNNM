import { Carousel , Container, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartProvider.jsx";

function Hero () {

    const { products } = useCart();
    const items = products.slice(0, 5);

    return(
        <Container>
            <Carousel data-bs-theme="dark">
                {items.map(i => (
                    <Carousel.Item key={i.id}>
                        <img
                        className="d-block w-100" 
                        src={i.images[0]} 
                        alt={i.title}
                        />
                        <Carousel.Caption>
                            <h3>{i.title}</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            
            <Container className="d-flex justify-content-center my-4">
                <Link to="/products">
                    <Button variant="info">
                        More Offers
                    </Button>
                </Link>
            </Container>

        </Container>
    );
}

export default Hero;