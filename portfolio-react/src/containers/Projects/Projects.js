import React, { useState } from 'react'

import ProjectInst from '../../components/ProjectInst/ProjectInst'
import BlockText from '../../components/BlockText/BlockText'
import LinkInst from '../../components/LinkInst/LinkInst'


import classes from './Projects.module.sass'

const Projects = (props) => {
    const [projects, setProjects] = useState({
        lista:{
            id: "lista",
            preview: null,
            url: 'https://lista-d4bd8.web.app/start'
        },
        burger:{
            id: "burger",
            preview: null,
            url: null
        },
        pizza:{
            id: "pizza",
            preview: null,
            url: null
        },
        pedro:{
            id: "lista",
            preview: null,
            url: 'https://lista-d4bd8.web.app/start'
        },
        banana:{
            id: "burger",
            preview: null,
            url: null
        },
        nicaragua:{
            id: "pizza",
            preview: null,
            url: null
        }
    })
    const [open, setOpen] = useState(null)

    const handleClick = (e) => {
        //console.log(e.target.id)
        //console.log(e.target)
        console.log('smth', e.target.id)
        setOpen(e.target.id)
    }


    const theProjects = Object.keys(projects).map( project =>{
        console.log('reload')
        return (
        <ProjectInst
            key={projects[project].id}
            id={projects[project].id}
            name={project}
            url={projects[project].url}
            preview={projects[project].preview}
            opened={open === projects[project].id ? true : false}
            click={handleClick}
        />
    )

    })

    return (
        <div id="portfolio" className={classes.bigContainer}>
            <div className={classes.title}>
                <BlockText className={classes.h2} > Portfolio </BlockText>
            </div>
            <LinkInst className={classes.h2}> Portfolio </LinkInst>
            <div className={classes.projectContainer}>
                {theProjects}
            </div>
        </div>

    )
}

export default Projects
