import React from 'react'
import classes from './HomeLayout.module.sass'

import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../../containers/Projects/Projects'

const homeLayout = (props) => {
    console.log('classes', classes)
    return (
         <div className={classes.layout}>
            <section className={classes.section}>
                <div className={classes.onLayout}>

                    <div className={classes.h1Container}></div>
                    <div className={classes.border}></div>
                    <Title/>
                    <Menu/>
                </div>
            </section>
            <section className={classes.section}>
                <AboutMe/>
            </section>
            <section className={classes.section}>
                <Projects/>
            </section>
        </div>
    )
}

export default homeLayout
