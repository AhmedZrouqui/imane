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
                    <div className="project_item_item">
                        <h2>{item.id} - {item.title}</h2>
                        <h4>{item.type}</h4>
                        <div>
                            <img src={item._3d_img} alt={item.title} />
                        </div>
                    </div>
                </ProjectItem>
            )
        })
    }

    return (
        <section className="projects_page" id="works" data-scroll-section>
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
        </section>
    )
}

export default Projects
