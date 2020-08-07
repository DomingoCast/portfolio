import React, { useState } from 'react'

import ProjectInst from '../../components/ProjectInst/ProjectInst'
import BlockText from '../../components/BlockText/BlockText'
import LinkInst from '../../components/LinkInst/LinkInst'
import Option from '../../components/Option/Option'
import Popup from '../../components/Popup/Popup'
//Popup/

import burger from '../../media/previews/burger.png'
import lista from '../../media/previews/lista-vertical.png'

import classes from './Projects.module.sass'

const Projects = (props) => {
    const [projects, setProjects] = useState({
        websites:{
            lista:{
                id: "lista",
                title: "lista",
                preview: lista,
                url: 'https://lista-d4bd8.web.app/start',
                technologies:{
                    'Front-end': [],
                    'Back-end': [],
                },
                description:"",
                github:"",
            },
            burger:{
                id: "burger",
                title: "burger",
                preview: burger,
                url: null,
                technologies:{
                    'Front-end': ['React', 'Redux', 'Sass'],
                    'Back-end': ['Firebase', 'MongoDB'],
                },
                description:"     Burgers is a project where you can build your own burger to taste. In reality it would serve a restaurant but I just did it to experiment with React, Redux and the firebase for the backend",
                github:"https://github.com/DomingoCast/burger-project",
            },
            pizza:{
                id: "pizza",
                preview: null,
                url: null
            },
            pedro:{
                id: "ista",
                preview: null,
                url: 'https://lista-d4bd8.web.app/start'
            },
            banana:{
                id: "urger",
                preview: null,
                url: null
            },
            nicaragua:{
                id: "izza",
                preview: null,
                url: null
            }
        },
        videos: {
            videoclip: {
                id: "videoclip",
                preview: null,
                url: "https://youtu.be/oDIxpPOu2A4"
            },
            domingoShow: {
                id: "show",
                preview: null,
                url: "https://youtu.be/1s_O8KHwRtU"
            }

        }
    })
    const [open, setOpen] = useState(null)
    const [currOption, setCurrOption] = useState('websites')
    const [onPop, setOnPop] = useState(false)

    const handleClick = (e, id) => {
        //console.log(e.target.id)
        //console.log(e.target)
        e.preventDefault()
        if(open === id){
            setOpen(null)
        }else{
            setOpen(id)
        }
    }

    const handleMore = (e) => {
        console.log('[POPPPPPPPPPPPPPPPP]')
        e.preventDefault()
        onPop ? setOnPop(false) : setOnPop(true)
    }

    const handleOption = (e, option) => {
        e.preventDefault()
        if (currOption !== option){
            setCurrOption(option)
        }
    }

    const theOptions = Object.keys(projects).map(project => (
        <Option
            name={project}
            current={currOption === project ? true : false}
            click={(e) => handleOption(e, project)}
        />
    ))


    const currProjects = projects[currOption]
    const theProjects = Object.keys(currProjects).map( project =>{
        console.log('reload')
        //console.log(project)
        //console.log(projects[currOption])
        return (
        <ProjectInst
            key={currProjects[project].id}
            id={currProjects[project].id}
            name={project}
            url={currProjects[project].url}
            preview={currProjects[project].preview}
            opened={open === currProjects[project].id ? true : false}
            click={(e) => handleClick(e, currProjects[project].id)}
            more={(e) => handleMore(e)}

        />
    )

    })
    //console.log('[POP]', currOption, open, projects[currOption][open])
    return (
        <>
        <Popup pop={onPop} back={handleMore}project={projects[currOption][open]}/>
        <div id="portfolio" className={classes.bigContainer}>
            <div className={classes.title}>
                <BlockText className={classes.h2} > Portfolio </BlockText>
            </div>
            <div className={classes.optionsContainer}>
                {theOptions}
            </div>
            <LinkInst className={classes.h2}> Portfolio </LinkInst>
            <div className={classes.projectContainer}>
                {theProjects}
            </div>
        </div>
        </>

    )
}

export default Projects
