import { Link } from "react-router-dom";
import { card } from "./item.module.scss";

const ItemComponent = ({ producto }) => {
  return (
    <div className={card}>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="400" height="400" />
      <p>Precio: {producto.price}</p>
      <p>Stock: {producto.stock}</p>
      <Link to={`/tienda/${producto.title}`}>Ver mas</Link>
    </div>
  );
};

export default ItemComponent;