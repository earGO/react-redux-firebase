import React from 'react';
import Notifications from "../Notifications/Notifications";
import ProjectList from "../../Projects/ProjectList/ProjectList";
import { connect } from "react-redux";


const mapStateToProps = (state) =>{
    return{
        projects: state.project.projects
    }
};

class Dashboard extends React.Component {
    render(){
        console.log(this.props.projects)
        const { projects } = this.props;
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

};

export default connect(mapStateToProps)(Dashboard);