import React from 'react';
import useStyles from "./styles";


const About = () => {
    const classes = useStyles();

    return ( 
        <div className={classes.container}>
            <h1 className={classes.title}>Tietoa yrityksestä</h1>
            <div className={classes.text}>
                <p></p>
            </div>
        </div>
     );
}
 
export default About;