import React from 'react';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Contact from './pages/Contact';
import Techno from './pages/Techno';
import Projet from './pages/Projet';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/techno" component={Techno} />
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;