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
import HeaderPage from './components/home/HeaderPage.js'
import HomeBanner from './components/home/HomeBanner.js'


function App() {
  return (
      <div class="">
          <HeaderPage></HeaderPage>
          <HomeBanner></HomeBanner>
      </div>
  );
}

export default App;
