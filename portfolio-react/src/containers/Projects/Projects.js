import React, { useState } from 'react'

import ProjectInst from '../../components/ProjectInst/ProjectInst'
import BlockText from '../../components/BlockText/BlockText'
import LinkInst from '../../components/LinkInst/LinkInst'
import Option from '../../components/Option/Option'
import Popup from '../../components/Popup/Popup'
//Popup/

import burger from '../../media/previews/burger.png'
import lista from '../../media/previews/lista-vertical.png'
import tomates from '../../media/previews/tomates.jpeg'
import domingoShow from '../../media/previews/domingo-show.png'
import nereaMolina from '../../media/previews/preview-nerea-portfolio.png'
import domingoCast from '../../media/previews/domingo-cast.png'
import customPortfolio from '../../media/previews/custom-portfolio.png'

import classes from './Projects.module.sass'
import videoclip from '../../media/previews/videoclip.png'

const Projects = (props) => {
    const [projects, setProjects] = useState({
        websites:{
            "custom portfolio":{
                id: "custom portfolio",
                title: "custom portfolio",
                preview: customPortfolio,
                url: null,
                technologies:{
                    'Front-end': ['React', 'Typescript'],
                    'Back-end': ['Nodejs', 'Kubernetes'],
                },
                description:"    Web app that allows the user to have a \"custom\" porfolio without much overhead",
                github:"https://github.com/DomingoCast/custom-portfolio",
            },
            "nerea molina":{
                id: "nerea molina",
                title: "nerea molina",
                preview: nereaMolina,
                url: 'https://nereamolina-4becc.web.app/',
                technologies:{
                    'Front-end': ['React', 'SASS'],
                    'Back-end': [''],
                },
                description:"    Portfolio para una fotógrafa local. (En desarrollo)",
                github:"https://github.com/DomingoCast/nerea-portfolio",
            },
            "domingo cast":{
                id: "domingo cast",
                title: "nerea molina",
                preview: domingoCast,
                url: 'https://domingocast.com',
                technologies:{
                    'Front-end': ['React', 'SASS'],
                    'Back-end': [''],
                },
                description:"    Portfolio personal",
                github:"https://github.com/DomingoCast/portfolio",
            },
            lista:{
                id: "lista",
                title: "lista",
                preview: lista,
                url: 'https://lista-d4bd8.web.app/start',
                technologies:{
                    'Front-end': ['React', 'Redux', 'SASS'],
                    'Back-end': ['Node.js', 'Heroku', 'MongoDB'],
                },
                description:"    Lista is a personal project that I create at first to help my family. It is used for creating lists and sharing them with people. In my case a groceries list to share with my family. The project is not finished yet",
                github:"https://github.com/DomingoCast/lista",
            },
            burger:{
                id: "burger",
                title: "burger",
                preview: burger,
                url: null,
                technologies:{
                    'Front-end': ['React', 'Redux', 'SASS'],
                    'Back-end': ['Firebase', 'MongoDB'],
                },
                description:"     Burgers is a project where you can build your own burger to taste. In reality it would serve a restaurant but I just did it to experiment with React, Redux and the firebase for the backend",
                github:"https://github.com/DomingoCast/burger-project",
            }
        },
        apps: {
            tomates:{
                id: "tomates",
                title: "tomates",
                preview: tomates,
                url: null,
                technologies:{
                    'Front-end': ['React Native'],
                    'Back-end': ['Firebase', 'MongoDB'],
                },
                description: "    Tomates is my first mobile app using React Native. Is a timer and activity tracker to use the pomodoro technique. I created it because I was tracking the amount of 'tomatoes' and extra time that I did each day and month by hand and that wasn't efficient enough. The project is not finished yet but I'm working on it",
                github: "https://github.com/DomingoCast/tomates"
            }
        },
        videos: {
            videoclip: {
                id: "videoclip",
                title: "videoclip",
                preview: videoclip,
                description:"    This is a videoclip I directed with a friend of mine for a local artist in my city. There are quite a lot of imperfections but it was the first videoclip I directed and we worked with no budget",
                url: "https://youtu.be/oDIxpPOu2A4"
            },
            show: {
                id: "show",
                title: "show",
                preview: domingoShow,
                description:"    This is the last of a series of daily videos that I did in my youtube channel for a week, where I created a mimic of a late night show with just me in my bedroom. It was challenging, the result was not perfect but it was a great experience and I learned a lot",
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
            type={currOption}
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
        <Popup pop={onPop} type={currOption} back={handleMore}project={projects[currOption][open]}/>
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
