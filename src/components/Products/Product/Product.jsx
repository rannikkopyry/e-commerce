import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <Link to={`/product-view/${product.id}`}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h4" className={classes.title}>
            <a href={`/product-view/${product.id}`}>{product.name}</a>
          </Typography>
          <Typography gutterBottom variant="h6" component="h4" className={classes.price}>
            €{product.price.formatted}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <p className={classes.addToBasket}>Lisää ostoskoriin</p>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
