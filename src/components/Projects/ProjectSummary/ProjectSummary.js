import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    const { title,authorFirstName, authorLastName } = project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-context grey-text text-darken-3">
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>Posted by {authorFirstName} {authorLastName}</p>
                    <p className={'grey-text'}>{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>

    )
};

export default ProjectSummary;