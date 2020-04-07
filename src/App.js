import React from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template_scss/pillar-1.scss';

import HeaderPage from './components/HeaderPage.js'
import CareerSummary from './components/CareerSummary.js'
import Experience from './components/Experience.js'
import SkillsAndTools from './components/SkillAndTools.js'
import Education from './components/Education.js'
import Lenguages from './components/Lenguages.js'

function App() {
  return (
      <article class="resume-wrapper text-center position-relative">
	      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <HeaderPage></HeaderPage>
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
					  </div>
          </div>
        </div>
        </div>
      </article>
  );
}

export default App;
