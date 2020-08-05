import React from 'react'

import classes from './Option.module.sass'

const option = (props) => {
    return (
        <a href="#" onClick={props.click} className={classes.option +' '+ (props.current ? classes.current : null)}>
            <span className={classes.text}>{props.name}</span>
        </a>

    )
}

export default option
