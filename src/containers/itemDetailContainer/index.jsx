import listaProducto from "../../mocks/listaProducto";
import ItemDetailComponent from "../../components/itemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = (props) => {
  const [producto, setProducto] = useState({});

  const { nombreProducto } = useParams();

  useEffect(() => {
    listaProducto.then((resp) => {
      setProducto(resp.find((li) => li.nombre === nombreProducto));
    });
  }, []);

  return (
    <>
      <ItemDetailComponent producto={producto} />
    </>
  );
};

export default ItemDetailContainer;