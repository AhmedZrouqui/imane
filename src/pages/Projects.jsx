import React from 'react'
import Container from '../components/utils/Container'
import ProjectItem from './partials/ProjectItem'
import { projects } from '../data/projects'
//import { LocomotiveScroll } from 'react-locomotive-scroll'


function Projects() {

    const displayProjects = () => {
        return projects.map((item,index) => {
            return(
                <ProjectItem>
                    <div className="first">
                            <h2>{item.title}</h2>
                            <h4>{item.type}</h4>
                        <img src={item._3d_img} alt={item.title} />
                    </div>

                    <div className="second">
                        <h4>Sketches</h4>
                        <div>
                        <img src={item._sketch1} alt={item.title} />
                        <img src={item._sketch2} alt={item.title} />
                        </div>
                    </div>
                </ProjectItem>
            )
        })
    }

    return (
        <div className="projects_page">
            <Container>
                <div className="title">
                    <h1>
                        Projects
                    </h1>
                </div>
                <div className="projects_gallery">
                    {displayProjects()}
                </div>
            </Container>
        </div>
    )
}

export default Projects
