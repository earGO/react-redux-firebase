import React from 'react';

const ProjectSummary = ({project}) => {
    const { title } = project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-context grey-text text-darken-3">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>Posted by Ear GO</p>
                    <p className={'grey-text'}>3rd September, 2am</p>
                </div>
            </div>
        </div>

    )
};

export default ProjectSummary;