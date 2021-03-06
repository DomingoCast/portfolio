import React from 'react'
import classes from './AboutMe.module.sass'
import billEvans from '../../media/images/bill-evans.jpg'
//import billEvans from '../../media/images/bill-evans-comp.jpg'

const aboutMe = (props) => {
    return (
        //<section>
        <div id="aboutMe" className={classes.bigContainer}>
            <div className={classes.background}>
                <div className={classes.frame+' '+classes.frame_1}>
                    <img className={classes.img + ' ' + classes.img_1} src={billEvans} alt="background image"/>
                </div>
                <div className={classes.frame+' '+classes.frame_2}>
                    <img className={classes.img + ' ' + classes.img_2} src={billEvans} alt="background image"/>
                </div>
                <div className={classes.frame+' '+classes.frame_3}>
                    <img className={classes.img + ' ' + classes.img_3} src={billEvans} alt="background image"/>
                </div>
            </div>
            <h1 className={classes.h1}> about me </h1>
            <p className={classes.p}>I like technology, design and jazz. That’s pretty much it</p>
        </div>
        //</section>
    )
}

export default aboutMe
