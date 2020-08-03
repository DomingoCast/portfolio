import React from 'react'

import classes from './ProjectInst.module.sass'

const projectInst = (props) => {
    const display = props.opened ? null : classes.hidden
    return(
        <div id={props.id} className={classes.container} onClick={(id = props.id) => props.click(id)}>
            <a className={classes.link} href="#">
                <span className={classes.text}>{props.name}</span><div className={classes.block}></div>
            </a>
            <div className={classes.window + ' ' + display}>
                <div className={classes.window_content}>
                </div>
            </div>
        </div>
    )
}

export default projectInst
