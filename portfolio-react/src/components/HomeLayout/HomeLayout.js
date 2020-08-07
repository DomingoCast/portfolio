import React, {useState, useEffect} from 'react'
import classes from './HomeLayout.module.sass'

import Title from '../Title/Title'
import Menu from '../Menu/Menu'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../../containers/Projects/Projects'
import Nav from '../Nav/Nav'

import realVh from '../../util/real-vh'

const HomeLayout = (props) => {
    const [currSection, setCSection] = useState(null)
    useEffect(() => {
        console.log('[EFFECTED]')
        setCSection(document.getElementById('title'))
    }, [props])
    const handleBack = (e) => {
        e.preventDefault()
        const theSectionID = document.elementFromPoint(0,0).className.split('_')[0]
        const theSection = document.getElementById(theSectionID)
        console.log(['THESECTION'], theSectionID, theSection)
        if(theSection.id !== 'title'){
            theSection.previousSibling.scrollIntoView()
            console.log('[BACK]')
        }
    }
    const handleNext = (e) => {
        console.log('[NEXT]',document.elementFromPoint(0,0), document.elementFromPoint(0,0).parentElement.id)
        e.preventDefault()
        const theSectionID = document.elementFromPoint(0,0).className.split('_')[0]
        const theSection = document.getElementById(theSectionID)
        console.log(['THESECTION'], theSectionID, theSection)
        if (theSection.nextSibling){
            theSection.nextSibling.scrollIntoView()
        }
    }
    realVh()
    return (
         <div className={classes.layout}>
            <div className={classes.h1Container}></div>
            <div className={classes.border}></div>
            <Nav back={(e)=> handleBack(e)} next={(e) => handleNext(e)}/>
            <section id="Title" className={classes.section}>
                <Title/>
            </section>
            <section id="Menu" className={classes.section}>
                <Menu/>
            </section>
            <section id="AboutMe"className={classes.section}>
                <AboutMe/>
            </section>
            <section id="Projects"className={classes.section}>
                <Projects/>
            </section>
        </div>
    )
}

export default HomeLayout
