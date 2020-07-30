import React, { useState } from 'react'

import ProjectInst from '../../components/ProjectInst/ProjectInst'

import classes from './Projects.module.sass'

const Projects = (props) => {
    const [projects, setProjects] = useState({
        lista:{
            preview: null,
            url: 'https://lista-d4bd8.web.app/start'
        },
        burger:{
            preview: null,
            url: null
        }
    })
    const theProjects = Object.keys(projects).map( project => (
        <ProjectInst key={project} name={project} url={projects[project].url} preview={projects[project].preview}/>
    ) )

    return (
        <div className={classes.bigContainer}>
            <div className={classes.projectContainer}>
                {theProjects}
            </div>
        </div>

    )
}

export default Projects
