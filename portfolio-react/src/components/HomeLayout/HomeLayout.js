import React, {useState, useEffect} from 'react'
import classes from './HomeLayout.module.sass'

import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../../containers/Projects/Projects'
import Nav from '../Nav/Nav'

const HomeLayout = (props) => {
    const [currSection, setCSection] = useState(null)
    useEffect(() => {
        console.log('[EFFECTED]')
        setCSection(document.getElementById('title'))
    }, [props])
    const handleBack = (e) => {
        e.preventDefault()
        if(currSection.id !== 'title'){
            setCSection(currSection.previousSibling)
            currSection.previousSibling.scrollIntoView()
            console.log('[BACK]')
        }
    }
    const handleNext = (e) => {
        console.log('[NEXT]')
        console.log(currSection, document.getElementById('title'))
        e.preventDefault()
        if (currSection.nextSibling){
            setCSection(currSection.nextSibling)
            console.log('next, ', currSection, currSection.nextSibling)
            currSection.nextSibling.scrollIntoView()
        }
    }
    return (
         <div className={classes.layout}>
            <div className={classes.h1Container}></div>
            <div className={classes.border}></div>
            <Nav back={(e)=> handleBack(e)} next={(e) => handleNext(e)}/>
            <section id="title" className={classes.section}>
                <Title/>
            </section>
            <section id="menu" className={classes.section}>
                <Menu/>
            </section>
            <section id="aboutMe"className={classes.section}>
                <AboutMe/>
            </section>
            <section id="projecs"className={classes.section}>
                <Projects/>
            </section>
        </div>
    )
}

export default HomeLayout
