import { Link } from "react-router-dom";
import CartWidgetComponent from "../cartWidget";
import { menu, subMenu, title } from "./navbar.module.scss";

const NavbarComponent = () => {
  return (
    <nav>
      <Link to={'/'} className={title}>Bella</Link>
      <ul className={menu}>
        <li>
          <Link to={"/categorias"}>Categorias</Link>
          <ul className={subMenu}>
            <li><Link to={`/categorias/n77F4xngEUhMIh0sux8W`}>Vestido</Link></li>
            <li><Link to={`/categorias/XP3vcpy5X816dTys1i0m`}>Calza</Link></li>
            <li><Link to={`/categorias/Ry8xU7oLDREJ73BxzcDq`}>Blusa</Link></li>
          </ul>
        </li>
        <li>
          <Link to={"/carrito"}>
            <CartWidgetComponent />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
