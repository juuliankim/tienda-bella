import ItemComponent from "../item";
import { row } from "./itemList.module.scss";

const ItemListComponent = ({ producto }) => {
  return (
    <div className={row}>
      {producto.map((producto) => {
        return <ItemComponent key={producto.id} producto={producto} />;
      })}
    </div>
  );
};

export default ItemListComponent;