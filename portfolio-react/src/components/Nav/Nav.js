import React from 'react'
import classes from './Nav.module.sass'

import nextBlack from '../../media/svg/next.svg'
import backBlack from '../../media/svg/back.svg'
import nextWhite from '../../media/svg/next-white.svg'
import backWhite from '../../media/svg/back-white.svg'

const nav = (props) => (
    <div className={classes.nav}>
        <a href='#' onClick={props.back}>
            <img className={classes.svg}src={backWhite}/>
        </a>
        <a href="#" onClick={props.next}>
            <img className={classes.svg} src={nextWhite}/>
        </a>
    </div>

)

export default nav
