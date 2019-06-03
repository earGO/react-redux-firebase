import React from 'react';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar/Navbar";
import Dashboard from "../../components/Dashboard/Dashboard/Dashboard";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Switch>
                  <Route exact path={'/'} component={Dashboard}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
