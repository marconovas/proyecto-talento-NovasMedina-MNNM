import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer (){
    return(
        <footer id="contact" className="bg-dark text-white py-4 mt-0">
            <Container>
                <Row>
                    {/* CONTACT INFO */}
                    <Col md={4}>
                        <h5>Contact Us:</h5>
                        <p>Email: info@miweb.com</p>
                        <p>Tel: +54 9 11 1234-5678</p>
                    </Col>

                    {/* LINKS */}
                    <Col md={4}>
                        <h5>Useful Links</h5>
                        <li><Link to="/" className="text-white">Home</Link></li>
                        <li><Link to="/products" className="text-white">Products</Link></li>
                        <li><Link to="/about" className="text-white">About Us</Link></li>
                    </Col>

                    {/* SOCIAL MEDIA */}
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <p>
                            <a href="#" className="text-white me-2">Facebook</a>
                            <a href="#" className="text-white me-2">Instagram</a>
                            <a href="#" className="text-white">Twitter</a>
                        </p>
                    </Col>
                </Row>

                <hr className="bg-white"/>

                <p className="text-center mb-0">&copy; 2025 MyWeb. All rights reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer;