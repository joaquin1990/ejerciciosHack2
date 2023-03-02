import React from "react";
import Table from "react-bootstrap/Table";
import groceries from "../db";

const ProductList = ({ setCart, cart }) => {
  const addToCart = (product) => {
    const isInCart = cart.find((it) => it.id === product.id);
    if (isInCart) {
      const newCart = cart.map((i) => {
        if (i.id !== product.id) return i;
        return { ...i, quantity: i.quantity + 1 };
      });
      setCart(newCart);
    } else setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <>
      <h2>Productos Disponibles:</h2>
      <Table bordered hover>
        <tbody>
          {groceries.map((product) => {
            return (
              <tr key={product.id}>
                <td onClick={() => addToCart(product)}>
                  <i className="fa-solid fa-plus"></i> {product.name} (<strong>$</strong>
                  {product.unitPrice} c/u)
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProductList;
