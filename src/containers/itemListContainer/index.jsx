import { row } from "./itemListContainer.module.scss";
import listaProducto from "../../mocks/listaProducto";
import React, { useState, useEffect } from "react";
import ItemListComponent from "../../components/itemList";

const ItemListContainer = (props) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => resolve(listaProducto), 2000);
    });

    promesa.then((result) => setProducto(result));
  }, []);

  // useEffect(() => {
  //     const baseDeDatos = getFirestore()
  //     const itemColleciton = baseDeDatos.collection('Items')
  //     itemColleciton.get().then((value) => {
  //         let aux = value.docs.map(element => {
  //             return {...element.data(), id: element.id}
  //     })
  //     console.log(aux)
  //     setProducto(aux)
  // }, [])

  return (
    <>
      <div className={row}>
        <ItemListComponent producto={producto} />
      </div>
    </>
  );
};

export default ItemListContainer;