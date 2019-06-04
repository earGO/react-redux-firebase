import React from 'react';
import ProjectSummary from "../ProjectSummary/ProjectSummary";
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
        return (
            <div className={'project-list section'}>
                {
                    projects && projects.map((project,key)=>{
                        return (
                            <Link to={'/project/' + project.id} key={key}>
                                    <ProjectSummary project={project}/>
                            </Link>
                        )
                    })
                }
            </div>

        )

};

export default ProjectList;