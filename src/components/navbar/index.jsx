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
            <li><Link to={`/categorias/Vestidos`}>Vestidos</Link></li>
            <li><Link to={`/categorias/Calzas`}>Calzas</Link></li>
            <li><Link to={`/categorias/Blusas`}>Blusas</Link></li>
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
