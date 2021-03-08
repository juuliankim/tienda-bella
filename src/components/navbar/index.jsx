import { Link } from "react-router-dom";
import CartWidgetComponent from "../cartWidget";
import { menu, subMenu, menuResponsive } from "./navbar.module.scss";

const NavbarComponent = () => {
  return (
    <nav>
      <span>Bella</span>
      <ul className={menu}>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/tienda"}>Tienda</Link>
          <ul className={subMenu}>
            <li>
              <Link to={"/"}>Categoria1</Link>
            </li>
            <li>
              <Link to={"/"}>Categoria2</Link>
            </li>
            <li>
              <Link to={"/"}>Categoria3</Link>
            </li>
            <li>
              <Link to={"/"}>Categoria4</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/contacto"}>Contacto</Link>
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
