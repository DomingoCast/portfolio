import React from 'react'

import classes from './ProjectInst.module.sass'

import internet from '../../media/svg/internet-grey.svg'
import plus from '../../media/svg/plus-grey.svg'

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

                                //<img className={classes.svg} src={internet} alt='www'/>
                                //<img className={classes.svg} src={plus} alt='+'/>
    return(
        <div id={props.id} className={classes.container} >
            <a className={classes.link} onClick={props.click} href="#">
                <span className={classes.text}>{props.name}</span><div className={classes.block}></div>
            </a>
            <div className={classes.window + ' ' + display}>
                <a href={props.url} rel="noopener noreferrer" target="_blank" className={classes.window_link}>
                    <div className={classes.window_content}>
                        {windowContent}
                        <div className={classes.hoverBack}>
                            <a href={props.url} target="_blank" rel="noopener noreferrer" className={classes.circle+' '+classes.circle_1}>
                                <span className={classes.www}>www</span>
                            </a>
                            <a href="#" onClick={props.more} className={classes.circle+' '+classes.circle_2}>
                                <span className={classes.www}>+</span>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default projectInst
