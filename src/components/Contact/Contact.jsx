import React from 'react';
import useStyles from "./styles";
import logo from "../../assets/yesskiwax.png";



const Contact = () => {
    const classes = useStyles();

    return ( 
        <>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Ota yhteyttä
          </h1>
          <div className={classes.image}>
          <img
              src={logo}
              alt="Yesskiwax logo"
              height="45px"
              className={classes.image}
            />
          </div>

        <main className={classes.content}>
          <h2>Yes Skiwax Finland</h2>
          <p>Less Friction Oy</p>
          <p>Y-tunnus: 3284820-9</p>
          <p>Email: info@yeskiwax.fi</p>
          <p>Puh: +358 452684828</p>
        </main>
        </div>
      </>
     );
}
 
export default Contact;