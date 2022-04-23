import React from 'react'
import Product from "./Product/Product";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";



const Gripwaxes = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  console.log(categories)

  if (!categories.length) return <LoaderSpinner />;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {categories.map((category, index) => {
        if (index === 2) {
          return (
            <>
            {category.productsData.map((product) => (
                <Product product={product} onAddToCart={onAddToCart} />
            ))}
          </>
          )
        }
      })}
    </main>
  );
};

export default Gripwaxes;