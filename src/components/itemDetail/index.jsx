import ItemCountComponent from "../itemCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { container, info, img } from "./itemDetail.module.scss"
import { btnb } from "../itemCount/itemCount.module.scss"

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
      <div className={container}>
        <div className={img}>
          <h2>{producto.title}</h2>
          <img src={producto.image} alt="" width="500" height="700"/>
        </div>
        <div className={info}>
          <p>Precio: {producto.price}</p>
          <p>Descripcion: {producto.description}</p>
          {carrito ? (
            <Link to={"/carrito"}>
              <button className={btnb}>Ir al Carrito</button>
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
      </div>
    </>
  );
};

export default ItemDetailComponent;