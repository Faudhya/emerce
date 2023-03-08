import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

function ProductCard(props) {
    const { product } = props;
    const navigate = useNavigate();

    return (
        <Col md={4} className="mb-3">
            <Card style={{ width: "300px" }}>
                <Card.Img
                    variant="top"
                    src={product.productImage}
                    className="product-card-img"
                />
                <Card.Body className="card-info">
                    <Card.Title>
                        <b>{product.productName}</b>
                    </Card.Title>
                    <Card.Text className="mb-2">
                        {product.description}
                    </Card.Text>
                    <Card.Text className="mb-4">Rp.{product.price}.-</Card.Text>
                    <Button
                        className="card-button"
                        variant="primary"
                        onClick={() => navigate("/product/" + product.id)}
                    >
                        Details
                    </Button>
                    <Button
                        className="card-button ml-2"
                        variant="success"
                        onClick={() => {
                            navigate("/cart");
                        }}
                    >
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;
