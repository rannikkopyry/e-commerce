import { Grid, Button, Container, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";
import "./styles.css";

const createMarkup = (text) => {
  return { __html: text };
};

const ProductView = ({ item, onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { name, price, image, quantity, description } = response;
    console.log(response);
    setProduct({
      id,
      name,
      quantity,
      description,
      src: image.url,
      price: price.formatted_with_symbol,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]);
  }, []);

  console.log(product.id);

  const handleQuantity = (param) => {
    if (param === "decriese" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (param === "increase" && quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
          <img src={product.src} alt={product.name} />
        </Grid>
        <Grid item xs={12} md={4} className="text">
          <Typography variant="h2">{product.name}</Typography>
          <Typography
            variant="p"
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
          <Typography variant="h3">Hinta: {product.price} <br />  <p>Alv. 24% sis. hintaan.</p></Typography>
          <Grid container spacing={4} lg={3}>
            <Grid item xs={12} className="counter">
              <Button
                size="small"
                variant="contained"
                className="increase-product-quantity"
                onClick={() => {
                  handleQuantity("increase");
                }}
              >
                {" "}
                +
              </Button>
            </Grid>
            <Grid>
              <Typography className="quantity" variant="h3">
                Kpl: {quantity}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                className="increase-product-quantity"
                onClick={() => {
                  handleQuantity("decriese");
                }}
              >
                -
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size="large"
                className="custom-button"
                onClick={() => {
                  handleAddToCart(product.id, quantity);
                }}
              >
                <AddShoppingCart /> Lisää ostoskoriin
              </Button>
            </Grid>
          </Grid>
        </Grid>
       <Typography>{product.related_products}</Typography>
      </Grid>
    </Container>
  );
};

export default ProductView;
