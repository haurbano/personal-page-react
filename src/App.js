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
import HomeBanner from './components/HomeBanner.js'
import CareerSummary from './components/CareerSummary.js'
import Experience from './components/Experience.js'
import SkillsAndTools from './components/SkillAndTools.js'
import Education from './components/Education.js'
import Lenguages from './components/Lenguages.js'
import Interests from './components/Interests.js'


function App() {
  return (
      <div class="">
	      <div class="">
          <HeaderPage></HeaderPage>
          <HomeBanner></HomeBanner>
          <div class="resume-body p-5">
          <CareerSummary></CareerSummary>
          <div class="row">
				    <div class="col-lg-9">
              <Experience></Experience>
            </div> 
            <div class="col-lg-3">
            <SkillsAndTools></SkillsAndTools>
            <Education></Education>
            <Lenguages></Lenguages>
            <Interests></Interests>
					  </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
