import React from 'react';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Contact from './pages/Contact';
import Techno from './pages/Techno';
import Projet from './pages/Projet';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/techno" component={Techno} />
        <Route path="/projet" component={Projet} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;