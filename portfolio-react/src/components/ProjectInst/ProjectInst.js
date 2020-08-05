import React from 'react'

import classes from './ProjectInst.module.sass'

const projectInst = (props) => {
    const display = props.opened ? null : classes.hidden
    const windowClick = () => {

    }

    let windowContent
    if(props.preview){
        windowContent = (
            <img className={classes.preview} src={props.preview} alt="Preview not available"/>
        )
    } else {
        windowContent = <p className={classes.alt}> Preview not available </p>
    }

    return(
        <div id={props.id} className={classes.container} >
            <a className={classes.link} onClick={props.click} href="#">
                <span className={classes.text}>{props.name}</span><div className={classes.block}></div>
            </a>
            <div className={classes.window + ' ' + display}>
                <a href={props.url} rel="noopener noreferrer" target="_blank" className={classes.window_link}>
                    <div className={classes.window_content}>
                        {windowContent}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default projectInst
