import React from 'react';
import Header from './components/Header';
import FormPage from './components/FormPage';
import "bootstrap/dist/css/bootstrap.css"
import ProjectTable from './components/ProjectTable';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion";
import About from './components/about';

function App() {

  return (

    <Router>
      <Header/> 
      <AnimatePresence>
      <Switch>
      <Route exact path='/'>
        <FormPage/>
        </Route>
      <Route path='/add'>
        <FormPage/>
        </Route>
      <Route path='/project'>
        <ProjectTable/>
        </Route>
        <Route path='/about'>
        <About/>
        </Route>
      </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
