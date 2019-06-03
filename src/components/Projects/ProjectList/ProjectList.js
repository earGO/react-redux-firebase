import React from 'react';
import ProjectSummary from "../ProjectSummary/ProjectSummary";

const ProjectList = ({projects}) => {
        return (
            <div className={'project-list section'}>
                {
                    projects && projects.map((project,key)=>{
                        return (
                        <ProjectSummary
                            key={key}
                            project={project}
                        />)
                    })
                }
            </div>

        )

};

export default ProjectList;