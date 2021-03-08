import "./App.css";
import NavbarComponent from "./components/navbar";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeComponent from "./components/home";
import ShopComponent from "./components/shop";
import ContactoComponent from "./components/contacto";
import CartComponent from "./components/cart";
import ItemDetailContainer from "./containers/itemDetailContainer";
import CartProvider from "./context/cartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/tienda">
            <ShopComponent />
          </Route>
          <Route path="/tienda/:nombreProducto">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/contacto">
            <ContactoComponent />
          </Route>
          <Route exact path="/carrito">
            <CartComponent />
          </Route>
        </Switch>
        {/* FOOTER */}
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
