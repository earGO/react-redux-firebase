
import React from 'react';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import ProjectDetails from "../../components/Projects/ProjectDetails/ProjectDetails";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";
import CreateProject from "../../components/Projects/CreateProject/CreateProject";




function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path={'/'} component={Dashboard}/>
                    <Route path={'/project/:id'} component={ProjectDetails}/>
                    <Route path={'/signin'} component={SignIn}/>
                    <Route path={'/signup'} component={SignUp}/>
                    <Route path={'/create'} component={CreateProject}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;