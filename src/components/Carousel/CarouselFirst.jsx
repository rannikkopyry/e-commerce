import Carousel from "react-multi-carousel";
import React from "react";
import Product from "../../components/Products/Product/Product";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import "./styles.css";
import "react-multi-carousel/lib/styles.css";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselFirst = ({ deviceType, categories, onAddToCart }) => {
  return (
    <>
      {categories.map((category, index) => {
        if (index === 0) {
          return (
            <>
              <Typography variant="h4">{category.name}</Typography>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
              >
                {category.productsData.map((product) => (
                  <Grid key={product.id} item xs={12}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Carousel>
            </>
          );
        }
      })}
    </>
  );
};

export default CarouselFirst;
