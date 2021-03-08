import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {table} from './cart.module.scss' 
import {Link} from 'react-router-dom'

const CartComponent = () => {
  const { cart, removeCart, clearCart, totalCost, itemCost } = useContext(CartContext);

  console.log("cart", cart);

  return (
    <>
      {cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Producto</th>

              <th>Nombre</th>

              <th>Cantidad</th>

              <th>Precio</th>

              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((product) => (
              <tr key={product.categoryId}>
                <td>
                  <img src={product.image} alt="img" style={{ width: "82px" }} />
                </td>

                <td>{product.title}</td>

                <td>{product.contador}</td>

                <td>{product.price}</td>

                <td>{itemCost(product)}</td>
                
                <td><button onClick={() => removeCart(product.categoryId)}>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <td></td>
            <td>Precio total: ${totalCost()}</td>
            <td></td>
            <td><button onClick={clearCart}>Limpiar Carrito</button></td>
          </tbody>
        </table>
      ) : (
        <>
        <div>No se tiene productos seleccionados</div>
        <Link to={'/tienda'}>
        <button>Volver a la tienda</button>
        </Link>
        </>
      )}
    </>
  );
};

export default CartComponent;