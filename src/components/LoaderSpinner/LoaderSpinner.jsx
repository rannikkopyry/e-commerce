import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./styles.css";

function LoaderSpinner() {
  return (
    <>
      <div className="spinner">
        <CircularProgress />
      </div>
    </>
  );
}

export default LoaderSpinner;
