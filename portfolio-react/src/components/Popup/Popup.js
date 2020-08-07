import React from 'react'

import classes from './Popup.module.sass'

import Table from '../Table/Table'

const popup = (props)=> {
    console.log('[texxJ]', props.technologies)
    return (
        props.project ?
        <div className={props.pop?classes.bigGuy:classes.hidden}>
        <div onClick={props.back} className={(props.pop?null:classes.hidden)+' '+classes.backdrop}>
        </div>
            <div className={classes.modal}>
                <div className={classes.background}/>
                <h2 className={classes.h2}>{props.project.title}</h2>
                <div className={classes.middle}>
                    <p className={classes.p}>{props.project.description}</p>
                    <div className={classes.technologies}>
                        <h3 className={classes.h3}>Technologies</h3>
                        <Table table={props.project.technologies}/>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <a className={classes.link} href={props.project.github}>github</a>
                    <a className={classes.link} href={props.project.website}>www</a>
                </div>
            </div>
        </div>
        : null

    )
}

export default popup
