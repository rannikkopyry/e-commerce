import React from 'react';
import useStyles from "./styles";


const About = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.container}>
            <h1>Tietoa yrityksestä</h1>
        </div>
     );
}
 
export default About;