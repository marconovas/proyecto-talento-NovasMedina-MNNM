import { Button, Container, Row, Col,  Card, Carousel, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function About (){
    return(
        <div>
            <Header />

            <div style={{
                position: "relative",
                backgroundImage: "url('https://picsum.photos/1920/1080')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                display: "flex",
                alignItems: "center",
                color: "white"
            }}>

                {/* Capa oscura para opacidad, NO TOCAR!!! */}
                <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                }}
                ></div>
                <Container
                    className="text-center d-flex flex-column justify-content-center align-items-center h-100"
                    style={{ position: "relative", zIndex: 2 }}
                >
                    <h1 className="fw-bold">Who are We</h1>

                    <p className="lead m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ab libero esse?</p>

                    <Button as={Link} to="/products" variant="primary" size="lg">
                        See Products
                    </Button>
                </Container>
            </div>

            <Container className="p-2">
                <h1 className="text-center fw-bold">Our Team</h1>

                <Row xs={1} md={2} className="g-4 justify-content-center text-center">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={`https://randomuser.me/api/portraits/men/${idx+10}.jpg`} className="rounded-circle w-75 mx-auto d-block p-4"/>
                            <Card.Body>
                            <Card.Title className="fw-bold">Team Member {idx+1}</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut consectetur, libero molestias obcaecati natus qui ducimus hic. Modi, nobis?
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
            <Container className="p-4">
                <h1 className="text-center mb-4 fw-bold">What our clients say about us:</h1>
                
                <Carousel>
                    <Carousel.Item>
                    <div
                        className="d-flex flex-column justify-content-center align-items-center text-center"
                        style={{ height: "300px" }}
                    >
                        <h3 className="fw-bold">"Number One"</h3>
                        <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div
                        className="d-flex flex-column justify-content-center align-items-center text-center"
                        style={{ height: "300px" }}
                    >
                        <h3 className="fw-bold">"The Best"</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium? Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div
                        className="d-flex flex-column justify-content-center align-items-center text-center"
                        style={{ height: "300px" }}
                    >
                        <h3 className="fw-bold">"Awesome"</h3>
                        <p className="lead">Lorem ipsum dolor sit amet. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Footer />
        </div>
    )
}

export default About;