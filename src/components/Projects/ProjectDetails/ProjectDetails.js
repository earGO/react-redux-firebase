import React from 'react';

const ProjectDetails = (props) => {
    const ID = props.match.params.id;
    return (
        <div className={'container section project-details'}>
          <div className="card z-depth-0 project-summary">
                <div className="card-context grey-text text-darken-3">
                    <div className="card-content">
                        <span className="card-title">Project Title - {ID}</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam commodi, consequatur cum, debitis dolorem doloremque ea enim eum ex expedita facilis in iusto laboriosam minima molestias natus nemo neque nesciunt nisi omnis perferendis placeat quaerat quo quod rem repudiandae saepe sed sint sit vero voluptas voluptates. Consequatur cupiditate error incidunt ipsam iure vel! Assumenda beatae dolore, dolorum et excepturi id inventore ipsum itaque maxime molestiae nisi nulla odio pariatur perspiciatis, provident quae quidem repellat temporibus totam velit, voluptas.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div className={""}>Posted by EarGO</div>
                        <div className={""}>2nd Semptember, 2am</div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ProjectDetails;