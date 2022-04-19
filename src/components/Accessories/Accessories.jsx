import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Products/Product/Product";
import useStyles from "./styles";

const Accessories = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Odotetut Yes Skiwax-tuotteet ja paljon muuta meiltä.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          odio enim nihil quisquam odit eaque reiciendis sapiente dolorem aut
          harum modi qui mollitia, facilis ipsam delectus repellendus fugit
          commodi maiores?
        </p>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
      </main>
    </>
  );
};

export default Accessories;
