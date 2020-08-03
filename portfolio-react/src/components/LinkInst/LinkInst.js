import React from 'react'

import classes from './LinkInst.module.sass'

const linkInst = (props) => (
    <a className={classes.link} href={'#'+props.link}>
        <span className={classes.text}>
            {props.text}
        </span>
        <div className={classes.block}>
        </div>
    </a>
)

export default linkInst
