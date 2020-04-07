import React from 'react';

import skillsAndTools from '../data/skillsAndTools.json'
import * as skills from './SkillsComponent.js'

class SkillsAndTools extends React.Component {

    render() {
        return (
            <section class="resume-section skills-section mb-5">
				<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                <div class="resume-section-content">
                    {skills.renderSkills(skillsAndTools.skills)}
                </div>
                <div class="resume-skill-item">
                    {skills.renderOtherSkills(skillsAndTools.othersSkills)}
                </div>
                    
            </section>
        );
    }
}

export default SkillsAndTools