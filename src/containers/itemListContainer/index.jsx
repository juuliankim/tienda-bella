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
    let docRef;
    if (categoryId) {
      docRef = baseDeDatos.collection("ITEMS").where("categoryId", "==", categoryId);
    } else {
      docRef = baseDeDatos.collection("ITEMS");
    }
    console.log("docRef", docRef);
    docRef.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No existen resultados");
      }
      setProducto(
        querySnapshot.docs.map((element) => ({...element.data(), id: element.id
        }))
      );
    });
  }, [categoryId]);

  return (
    <>
      <div className={row}>
        <ItemListComponent producto={producto} />
      </div>
    </>
  );
};

export default ItemListContainer;