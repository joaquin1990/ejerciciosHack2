import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App p-5">
      <Container>
        <Row>
          <Col>
            <ProductList cart={cart} setCart={setCart} />
          </Col>
          <Col>
            <Cart cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
