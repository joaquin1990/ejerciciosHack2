import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([
    {
      id: 2,
      name: "Uva",
      unitPrice: 23.0,
    },
  ]);

  // const countRepeatedItems = (item) => {
  //   let times = 0;
  //   cart.reduce((acc, item) => {
  //     acc[item] = (acc[item] || 0) + 1;
  //     times = acc;
  //     return acc;
  //   }, {});
  //   return times;
  // };

  return (
    <div className="App p-5">
      <Container>
        <Row>
          <Col>
            <ProductList cart={cart} setCart={setCart} />
          </Col>
          <Col>
            <Cart cart={cart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
