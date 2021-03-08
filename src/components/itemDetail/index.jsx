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
      categoryId: producto.categoryId,
      title: producto.title,
      price: producto.price,
      image: producto.image,
      description: producto.description,
      stock: producto.stock,
      contador
    });
  };

  console.log(cart);

  return (
    <>
      <div>
        <h2>{producto.title}</h2>
        <img src={producto.image} alt="" width="400" height="550" />
        <p>Precio: {producto.price}</p>
        <p>Descripcion: {producto.description}</p>
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