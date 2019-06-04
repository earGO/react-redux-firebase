import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from "react-router-dom";

const ProjectDetails = (props) => {
    const { project,auth } = props;
    if(!auth.uid) return <Redirect to={'/signin'}/>
    if(project){
        return (
            <div className={'container section project-details'}>
                <div className="card z-depth-0 project-summary">
                    <div className="card-context grey-text text-darken-3">
                        <div className="card-content">
                            <span className="card-title">{ project.title }</span>
                            <p>{ project.content }</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div className={""}>Posted by { project.authorFirstName } { project.authorLastName }</div>
                            <div className={""}>2sept 1999</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div className="container center">
                <h3>Loading project...</h3>
            </div>
        )
    }


};

const mapStateToProps = (state,ownProps) => {
    const ID = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[ID] : null;
    return {
        project:project,
        auth:state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);