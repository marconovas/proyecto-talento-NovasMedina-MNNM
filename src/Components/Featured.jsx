import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartProvider.jsx';

function Featured () {

    const { products } = useCart();
    const items = products.slice(0, 5);
    
    return(
        <Container>
            <Container className='text-center my-5'>
                    <h1 className='display-3 fw-bold' style={{ fontFamily: "'Georgia', serif", letterSpacing: "2px" }}>
                        Featured Products
                    </h1>
                    <p className='lead text-muted'>
                        Most solicited Products on Sale
                    </p>
            </Container>

            <Row xs={1} md={3} className="g-4 justify-content-center">
                {items.map((i, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Img variant="top" src={i.images[0]} />
                            <Card.Body>
                                <Card.Title>{i.title}</Card.Title>
                                <Card.Text>
                                    {i.description}
                                    <br/>
                                    <b>
                                        ${i.price} {i.dicountPercentage}
                                    </b>
                                </Card.Text>
                                <Container className='d-flex justify-content-center my-4'>
                                    <Link to="/products">
                                        <Button variant="primary">See More</Button>
                                    </Link>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Container>
    )
}

export default Featured;