import React from 'react'
import classes from './Contact.module.sass'

const contact = (props) => {
    return(

        <>
        <div id="contact" className={classes.bigContainer}>
            <h2 className={classes.h2}>Contact</h2>
            <div className={classes.linkContainer}>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/domingo-castillo-342b8b17a" className={classes.link}>linkedin</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://github.com/DomingoCast" className={classes.link}>github</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/domingo_cast/" className={classes.link}>instagram</a>
                <a target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/user/castillomartidomingo" className={classes.link}>youtube</a>
            </div>
            <div className={classes.info}>
                <span className={classes.text}>tlf: +34 688 90 15 07</span><br/><br/>
                <span className={classes.text}>email: castillomartidomingo@gmail.com</span>
            </div>
        </div>
        <div className={classes.border}></div>
        </>

    )
}

export default contact
