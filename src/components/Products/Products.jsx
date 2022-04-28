import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";
import { Category } from "@material-ui/icons";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";


const Products = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  if (!categories.length) return <LoaderSpinner />;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {categories.map((category) => {
      return (
        <Grid container justify="center" spacing={4}>
        {category.productsData.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      )
      })}
    </main>
  );
};

export default Products;
