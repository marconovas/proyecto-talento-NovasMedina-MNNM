import { Row, Col, Card, Button, Container, CardImgOverlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartProvider.jsx';

function Sections () {

    const { products } = useCart();
    const items = products.slice(0, 6);

    return(
        <Container>
            <Container className='text-center my-5'>
                <h1 className='display-3 fw-bold' style={{ fontFamily: "'Georgia', serif", letterSpacing: "2px" }}>
                    Featured Sections
                </h1>
                <p className='lead text-muted'>
                    FInd the best offers and carefully selected Products
                </p>
            </Container>

            <Row xs={1} md={3} className="g-4 justify-content-center">
                {items.map((i, index) => (
                    <Col key={index}>
                        <Card >
                            <Card.Img variant="top" src={i.images[0]} />
                            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50 p-3">
                                <Card.Title className='text-light text-center'>{i.category}</Card.Title>
                                <Card.Text className='text-white-50 text-center'>
                                    Explore category's products
                                </Card.Text>
                                <Container className='d-flex justify-content-center my-4'>
                                    <Link to="/products">
                                        <Button variant="light">See more</Button>
                                    </Link>
                                </Container>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Sections;