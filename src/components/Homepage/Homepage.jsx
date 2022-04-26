import React, { useState } from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Product from "../Products/Product/Product";
import { Typography } from "@material-ui/core";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import FilterProduct from "../FilterProduct/FilterProduct";
import CarouselFirst from "../Carousel/CarouselFirst";
import "react-multi-carousel/lib/styles.css";

const Homepage = ({ onAddToCart, categories, addProduct }) => {
  const [searchResult, setSearchResult] = useState("");

  const classes = useStyles();

  if (!categories.length) return <LoaderSpinner />;

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <h1 className={classes.title}>
            Odotetut Yes Skiwax-voiteet ja tuotteet nyt Suomessa
          </h1>
        </div>
        <FilterProduct
          placeholder="Etsi tuotteita"
          categories={categories}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          addProduct={addProduct}
        />
        <CarouselFirst
          categories={categories}
          addProduct={addProduct}
        />
        {categories.map((category) => {
          return (
            <>
              <Typography variant="h4" className={classes.categoryTitle}>
                {category.name}
              </Typography>
              <Grid container justifyContent="center" spacing={4}>
                {category.productsData.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Homepage;
