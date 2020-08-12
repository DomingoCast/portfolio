import React from 'react'
import classes from './Menu.module.sass'

import LinkInst from '../LinkInst/LinkInst'

const home = (props) => {
    console.log('classes', classes)
    return (
        <div className={classes.h1Container}>
            <LinkInst text="About Me" link="aboutMe"/>
            <LinkInst text="Portfolio"link="portfolio"/>
        </div>
    )
}

export default home
