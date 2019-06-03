import React from 'react';

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
        console.log(this.state)
    }

    render() {
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

export default CreateProject;