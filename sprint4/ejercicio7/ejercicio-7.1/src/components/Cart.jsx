import Table from "react-bootstrap/Table";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <h2>Carrito de Compras:</h2>
      <Table bordered hover>
        <tbody>
          {cart.map((item, i) => {
            return (
              <tr>
                <td key={i}>
                  {item.name} Cant:{} Price:{item.unitPrice}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
