import React from "react";
import Table from "react-bootstrap/Table";
import groceries from "../db";

const ProductList = ({ setCart, cart }) => {
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <h2>Productos Disponibles:</h2>
      <Table bordered hover>
        <tbody>
          {groceries.map((item) => {
            return (
              <tr>
                <td onClick={() => addToCart(item)} key={item.id}>
                  {item.name}
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
