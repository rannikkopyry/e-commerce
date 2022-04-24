import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Navbar,
  Footer,
  Homepage,
  Products,
  Cart,
  Checkout,
  Glidewaxes,
  Gripwaxes,
  About,
  Contact,
  Whyus,
  Search,
  TermsAndConditions,
  PrivacyPolicy,
  Rotokit,
  OtherProducts,
  ProductShowcase,
} from "./components";
import { commerce } from "./lib/commerce";
import './app.css';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Fetching all products and by category

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();

    const productsPerCategory = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((products) =>
            products.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);

    setCategories(productsPerCategory);
  };

  // Fetch cart

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          categories={categories}
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Homepage
              categories={categories}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/products">
            <Products
              categories={categories}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
            </Route>
             <Route exact path="/products/:id">
            <ProductShowcase
              categories={categories}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
            </Route>
            <Route exact path="/luistovoiteet">
              <Glidewaxes
                categories={categories}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/rotokit">
              <Rotokit
                categories={categories}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/pitovoiteet">
              <Gripwaxes
                categories={categories}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
              />
            </Route>
            <Route exact path="/muut">
              <OtherProducts
                categories={categories}
                onAddToCart={handleAddToCart}
                handleUpdateCartQty
             />
          </Route>
          <Route exact path="/yritys">
            <About />
          </Route>
          <Route exact path="/miksimeidat">
            <Whyus />
          </Route>
          <Route exact path="/yhteystiedot">
            <Contact />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout" exact>
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/tietosuojaseloste">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/kayttoehdot">
            <TermsAndConditions />
          </Route>
        </Switch>
        </div>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
