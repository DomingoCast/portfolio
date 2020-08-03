import React from 'react'

import classes from './BlockText.module.sass'

const blockText = (props) => (
    <div className={classes.blockText}>
        <span className={classes.text}>
            {props.children}
        </span>
        <div className={classes.block}>
        </div>
    </div>
)

export default blockText
