import Table from "react-bootstrap/Table";

const Cart = ({ cart, setCart }) => {
  const takeFromCart = (product) => {
    const newCart = cart
      .map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0);

    setCart(newCart);
  };
  return (
    <>
      <h2>Carrito de Compras:</h2>
      <Table bordered hover>
        <tbody>
          {cart.map((product) => {
            return (
              <tr key={product.id}>
                <td onClick={() => takeFromCart(product)}>
                  <i className="fa-solid fa-minus"> </i> <strong>{product.name}</strong> (<strong>Cantidad:</strong> {product.quantity})
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
