import { row } from "./itemListContainer.module.scss";
import listaProducto from "../../mocks/listaProducto";
import React, { useState, useEffect } from "react";
import ItemListComponent from "../../components/itemList";
import { getFirestore } from '../../firebase'

const ItemListContainer = (props) => {
  const [producto, setProducto] = useState([]);

  // useEffect(() => {
  //   const promesa = new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(listaProducto), 2000);
  //   });

  //   promesa.then((result) => setProducto(result));
  // }, []);

  useEffect(() => {
    // conexion a la bd
    const baseDeDatos = getFirestore();

    // Guardamos la referencia de la coleccion que queremos tomar
    const itemCollection = baseDeDatos.collection('ITEMS');

    // Tomando los datos
    itemCollection.get().then(async (value) => {
        //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
        let aux = await Promise.all(value.docs.map( async (product) => {

            // Llamar otra vez a la bd tomando la categoriaID del element
            const CategoriasCollection = baseDeDatos.collection('CATEGORIAS');

            // Tomamos el documento la id de la categoria
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