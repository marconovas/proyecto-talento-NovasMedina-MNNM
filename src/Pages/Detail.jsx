import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { ProductsContext } from "../Context/MockApiCOntext";

function Detail (){
    const { products } = useContext(ProductsContext);
    const  { id } = useParams();
    const item = products.find(p => p.id === id);

    if(!item) return <h1>Item not Found!</h1>;

    return(
        <div>
            <Header/>

            <Row className="align-items-center justify-content-center my-5">
                <Col md={5} className="text-center">
                    <Image src={item.image} fluid rounded/>
                </Col>
                
                <Col md={5} className="text-center text-md-start">
                    <h1 className="fw-bold mb-3">{item.name}</h1>
                    <p className="lead">{item.description}</p>
                    <Button as={Link} to={"/products"} variant="primary">Back to List</Button>
                </Col>
            </Row>

            <Footer />
        </div>
    )
}

export default Detail;