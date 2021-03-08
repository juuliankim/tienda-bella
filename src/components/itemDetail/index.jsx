import ItemCountComponent from "../itemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetailComponent = ({ producto }) => {
  const [carrito, setCarrito] = useState(false);
  const [contador, setContador] = useState(1);
  const { addCart, cart} = useContext(CartContext);

  const onAdd = () => {
    console.log("Ud selecciono ", contador);
    setCarrito(true);
    addCart({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      url: producto.url,
      descripcion: producto.descripcion,
      stock: producto.stock,
      contador
    });
  };

  console.log(cart);

  return (
    <>
      <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.url} alt="" width="400" height="550" />
        <p>Precio: {producto.precio}</p>
        <p>Descripcion: {producto.descripcion}</p>
      </div>
      <div>
        {carrito ? (
          <Link to={"/carrito"}>
            <button>Ir al Carrito</button>
          </Link>
        ) : (
          <ItemCountComponent
            onAdd={onAdd}
            descripcion={"tenemos en Stock"}
            stock={producto.stock}
            inicial={1}
            contador={contador}
            setContador={setContador}
          />
        )}
      </div>
    </>
  );
};

export default ItemDetailComponent;