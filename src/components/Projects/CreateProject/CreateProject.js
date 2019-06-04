import React from 'react';
import { connect } from 'react-redux';
import { createProject } from "../../../store/actions/projectActions";
import {Redirect} from "react-router-dom";


const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject:(project) => dispatch(createProject(project))
    }
};

class CreateProject extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            content:''
        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.history.push('/');
    };

    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to={'/signin'}/>
        return (
            <div className={'container'}>
                <form onSubmit={this.handleSubmit} className="white ">
                    <h5 className="grey-text text-darken-3">New project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id={'title'} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id={'content'} className={'materiaize-textarea'} cols='30' rows={'10'} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" type={'submit'}>Create new project</button>
                    </div>
                </form>
            </div>

        )
    }


};

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);