import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { table, container, btnb, input, btnc } from './cart.module.scss' 
import { Link } from 'react-router-dom'
import { getFirestore } from "../../firebase";
import firebase from 'firebase/app'
import "firebase/firestore";

const CartComponent = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('') 
  const [orderId, setOrderId] = useState()
  const { cart, removeCart, clearCart, totalCost, itemCost } = useContext(CartContext);
  
  const finalizarCompra = () => {
    let newOrder = { buyer: {name: name, email: email, telefono: phone}, items: [...cart],date: firebase.firestore.FieldValue.serverTimestamp(), total: totalCost()} 
    console.log("numberId",  orderId)
    const fsBdD = getFirestore()
    const OrdenesCollection = fsBdD.collection("ORDENES")
    OrdenesCollection.add(newOrder).then((value) => {
      setOrderId(value.id)
    alert("Su numero de orden: " + orderId)
    })
    clearCart()
  }

  return (
    <>
      <div className={container}>
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
                  
                  <td><button className={btnb} onClick={() => removeCart(product.categoryId)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
            <tbody>
              <td></td>
              <td>Precio total: ${totalCost()}</td>
              <td></td>
              <td><button className={btnb} onClick={clearCart}>Limpiar Carrito</button></td>
              <td><Link to={'/'}><button className={btnb} >Seguir Comprando</button></Link></td>
            </tbody>
          </table>
        ) : (
          <>
          <div>No se tiene productos seleccionados</div>
          <Link to={'/'}>
          <button className={btnb}>Volver a la tienda</button>
          </Link>
          </>
        )}
        <div>
          <p>Agrega tus datos para finalizar la compra</p>
          <input type="text" placeholder="Nombre" onChange={(e) => { setName(e.target.value)}}/>
          <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value)}}/>
          <input type="text" placeholder="Telefono" onChange={(e) => { setPhone(e.target.value)}}/><br/>
          <button className={btnc} onClick={() => finalizarCompra()}>Comprar</button>
        </div>
      </div>
    </>
  );
};

export default CartComponent;