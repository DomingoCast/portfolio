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
                    {props.type==='websites' ? 
                        <div className={classes.technologies}>
                            <h3 className={classes.h3}>Technologies</h3>
                            <Table table={props.project.technologies}/>
                        </div>
                    : null}
                </div>
                <div className={classes.buttons+' '+ (props.type === "websites" ? null : classes.videos)}>
                    { props.type==='websites' ? <a className={classes.link} target="_blank" rel="noopener noreferrer" href={props.project.github}>github</a> : null }
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href={props.project.url}>www</a>
                </div>
            </div>
        </div>
        : null

    )
}

export default popup
