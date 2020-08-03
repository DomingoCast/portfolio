import React from 'react'
import classes from './AboutMe.module.sass'

const aboutMe = (props) => {
    return (
        //<section>
        <div id="aboutMe" className={classes.bigContainer}>
            <div className={classes.background}>
                <div className={classes.img + ' ' + classes.conImg1}></div>
                <div className={classes.img + ' ' + classes.conImg2}></div>
                <div className={classes.img + ' ' + classes.conImg3}></div>
            </div>
            <h1 className={classes.h1}> about me </h1>
            <p className={classes.p}>I like technology, design and jazz. That’s pretty much it</p>
        </div>
        //</section>
    )
}

export default aboutMe
