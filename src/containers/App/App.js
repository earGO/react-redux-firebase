
import React from 'react';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";
import ProjectDetails from "../../components/Projects/ProjectDetails/ProjectDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path={'/'} component={Dashboard}/>
                    <Route path={'/project/:id'} component={ProjectDetails}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;