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
            <li><Link to={`/categorias/Saquitos`}>Saquitos</Link></li>
            <li><Link to={`/categorias/Babuchas`}>Babuchas</Link></li>
            <li><Link to={`/categorias/Remeras`}>Remeras</Link></li>
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
