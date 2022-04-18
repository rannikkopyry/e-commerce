import { mergeClasses } from "@material-ui/styles";
import React from "react";
import useStyles from "./styles";

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Odotetut Yes Skiwax-tuotteet ja paljon muuta meiltä.</h1>
    </div>
  );
}
