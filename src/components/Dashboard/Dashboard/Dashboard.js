import React from 'react';
import Notifications from "../Notifications/Notifications";
import ProjectList from "../../Projects/ProjectList/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";


const mapStateToProps = (state) =>{
    return{
        projects: state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
};


class Dashboard extends React.Component {
    render(){
        const { projects,auth } = this.props;
        if(!auth.uid) return <Redirect to={'/signin'}/>
        return (
            <div className={'dashboard container'}>
                <div className="row">
                    <div className={"col s12 m6"}>
                        <ProjectList projects={projects}/>
                    </div>
                    <div className={"col s12 m5 offset-m1"}>
                        <Notifications/>
                    </div>
                </div>
            </div>

        )
    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);