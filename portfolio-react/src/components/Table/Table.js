import React from 'react'

import classes from './Table.module.sass'

const table = (props) => {
    console.log('[TABLE]', props.table/*,Object.keys(props.table)*/ )
    const tableContent = Object.keys(props.table).map((head, index) => {
        const insides = props.table[head].map(entry => <span className={classes.entry}>{entry}</span>)
        console.log('[TABLE]', Object.keys(props.table).length, index)
        return(
            <div className={classes.column}>
                <span className={classes.head}>{head}:</span>
                {insides}
            </div>
        )
    })
    return (
        //<h3 className={classes.h3}>Technologies</h3>
        <div className={classes.bigTable}>
            <div className={classes.table}>
                {tableContent}
                <div className={classes.sep_h}/>
                <div className={classes.sep_v}/>
            </div>
        </div>

    )

}

export default table
