import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Product from "../Products/Product/Product";

const Homepage = ({ products, onAddToCart }) => {
  const classes = useStyles();

  console.log(products)
  if (!products.length) return <p>Loading...</p>;

  return (
    <>
    <div className={classes.container}>
      <h1 className={classes.title}>Odotetut Yes Skiwax-tuotteet ja paljon muuta meiltä.</h1>
    </div>
    <main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  </main>
  </>
  );
};

export default Homepage;
