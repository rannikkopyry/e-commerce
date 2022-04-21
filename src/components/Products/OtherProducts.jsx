import React from 'react'
import Product from "./Product/Product";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";


const OtherProducts = ({ categories, onAddToCart }) => {
  const classes = useStyles();

  console.log(categories)

  if (!categories.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {categories.map((category, index) => {
        if (index === 1) {
          return (
            <>
            <Typography variant="h4" className={classes.categoryTitle}>
            {category.name}
          </Typography>
            <Grid container justify="center" spacing={4}>
            {category.productsData.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
          </>
          )
        }
      })}
    </main>
  );
};

export default OtherProducts;