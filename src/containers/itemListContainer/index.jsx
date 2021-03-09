import { row } from "./itemListContainer.module.scss";
import React, { useState, useEffect } from "react";
import ItemListComponent from "../../components/itemList";
import { getFirestore } from '../../firebase'
import { useParams } from "react-router"

const ItemListContainer = (props) => {
  const [producto, setProducto] = useState([]);
  const {categoryId} = useParams()

  useEffect(() => {
    const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('ITEMS');
    itemCollection.get().then(async (value) => {
        let aux = await Promise.all(value.docs.map( async (product) => {
            const CategoriasCollection = baseDeDatos.collection('CATEGORIAS');
            let auxCategorias = await CategoriasCollection.doc(product.data().categoryId).get()
            return { ...product.data(), categoria:auxCategorias.data() }
        }))
        console.log(aux)
        setProducto(aux);
    })
  }, [])

  return (
    <>
      <div className={row}>
        <ItemListComponent producto={producto} />
      </div>
    </>
  );
};

export default ItemListContainer;