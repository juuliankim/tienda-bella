import ItemDetailComponent from "../../components/itemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore } from '../../firebase'

const ItemDetailContainer = (props) => {
  const [producto, setProducto] = useState({});

  const { title } = useParams();

  useEffect(() => {

    const baseDeDatos = getFirestore();
    const itemCollection = baseDeDatos.collection('ITEMS').where("title", "==", title);
    itemCollection.get().then((querySnashot) => {
        if(querySnashot.docs.length > 0) {
          const queryResult = querySnashot.docs.map( doc => ({id: doc.id, ...doc.data()}));
          console.log(queryResult);
          setProducto(queryResult[0]);
        }
    })
  }, [title])


  return (
    <>
      <ItemDetailComponent producto={producto} />
    </>
  );
};

export default ItemDetailContainer;