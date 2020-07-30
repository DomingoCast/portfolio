import React from 'react'
import classes from './Title.module.sass'

import Title from '../Title/Title'
import Menu from '../Menu/Title'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../../containers/Projects/Projects'

const homeLayout = (props) => {
    console.log('classes', classes)
    return (
         <div className={classes.layout}>
            <section>
                <div className={classes.onLayout}>

                    <div className={classes.h1Container}></div>
                    <div className={classes.border}></div>
                    <Title/>
                    <Menu/>
                </div>
            </section>
            <section>
                <AboutMe/>
            </section>
            <section>
                <Projects/>
            </section>
        </div>
    )
}

export default homeLayout
