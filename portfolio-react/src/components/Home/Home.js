import React from 'react'
import classes from './Home.module.sass'

import Title from '../Title/Title'

const home = (props) => {
    console.log('classes', classes)
    return (
        <>
        <Title/>
        <div className={classes.container}>
            <div className={classes.h1Container}>
                <h1 className={classes.h1}>
                    <span className={classes.name}>Domingo</span>
                    <span className={classes.surname}>Castillo</span>
                    <div className={classes.block}></div>
                </h1>
            </div>
        </div>
        </>
    )
}

export default home
