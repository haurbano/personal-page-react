import React from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './template_scss/pillar-1.scss';

import HeaderPage from './components/HeaderPage.js'

function App() {
  return (
      <article class="resume-wrapper text-center position-relative">
	      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <HeaderPage></HeaderPage>
        </div>
      </article>
  );
}

export default App;
