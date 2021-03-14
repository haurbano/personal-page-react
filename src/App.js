import React from 'react';

// CSS
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template_scss/pillar-1.scss';
import './template_css/_about.css';
import './template_css/_courses.css';
import './template_css/_feature.css';
import './template_css/_gallery.css';
import './template_css/_instagram.css';
import './template_css/_price.css';
import './template_css/_service.css';
import './template_css/_testimonials.css';
import './template_css/bootstrap.css';
import './template_css/breadcrumb.css';
//import './template_css/font-awesome.min.css';
import './template_css/style.css';
import './template_css/responsive.css';
import './template_css/haur_custom.css';



// Components
import HeaderPage from './components/HeaderPage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Background from './components/background/Background';
import Home from './components/home/Home';


function App() {
  return (
    <Router>
      <div>
          <HeaderPage></HeaderPage>
      </div>
      <section class="home_banner_area">
        <div class="container box_1620">
          <Switch>
              <Route exact path="/home"> <Home/> </Route>
              <Route exact path="/">
                <Redirect to="/home" /> 
              </Route>
              <Route exact path="/background"> <Background/> </Route>
          </Switch>
        </div>
      </section>
    </Router> 
  );
}

export default App;
