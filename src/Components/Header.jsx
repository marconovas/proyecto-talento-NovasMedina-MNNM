import { Container, Navbar, Nav, Button, Dropdown, Badge } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../Context/CartProvider";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function Header () {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const { token, LogOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        LogOut();
        navigate("/login");
    }

    return(
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className="">
            <Container fluid>
                <Nav className="me-auto">
                    <Link to="/" className="text-decoration-none">
                        <Navbar.Brand>
                            <i className="bi bi-bootstrap-fill"></i> {''}
                            Shopping Cart
                        </Navbar.Brand> 
                    </Link>
                </Nav>

                <div className="d-flex align-items-center">
                    {!token ? (
                        <Button as={Link} to={"/login"} variant="primary" className="m-1">Login</Button>
                    ) : (
                        <div>
                            <Button variant="success" as={Link} to="/admin">Admin</Button>
                            <Button variant="danger" onClick={handleLogout}>Logout</Button>
                        </div>
                    )}

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </div>
                
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>

                        <Dropdown className="m-1">
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Explore
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu-dark">
                                
                                <Dropdown.Item className="text-white" as={Link} to="/products">Our Products</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    
                    <Link to="/Cart" className="text-white text-decoration-none">
                        <i className="bi bi-cart4 text-white fs-2 m-1"></i>
                        <Badge bg="secondary">
                            {totalItems}
                        </Badge>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;