import "./App.css";
import NavbarComponent from "./components/navbar";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./containers/itemListContainer"
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
            <ItemListContainer />
          </Route>
          <Route path="/tienda/:title">
            <ItemDetailContainer />
          </Route>
          <Route path="/categorias/:categoryId">
            <ItemListContainer/>
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
