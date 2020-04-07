import React from 'react';

import skillsAndTools from '../data/skills-basic-info.json'

class SkillsAndTools extends React.Component {

    renderSkills(skills) {
        return (
            <div class="resume-skill-item">
                <h4 class="resume-skills-cat font-weight-bold">Skills</h4>
                <ul class="list-unstyled mb-4">
                    {skills.map( skill => (
                        <li class="mb-2">
                            <div class="resume-skill-name">{skill.name}</div>
                            <div class="progress resume-progress">
                                <div class="progress-bar theme-progress-bar-dark" role="progressbar" style={{flex: skill.level}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    
    renderOtherSkills(otherSkills) {
        return (
            <div>
                <h4 class="resume-skills-cat font-weight-bold">Others </h4>
                <ul class="list-inline">
                    {otherSkills.map( skill => (
                        <li class="list-inline-item"><span class="badge badge-light">{skill}</span></li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <section class="resume-section skills-section mb-5">
				<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                <div class="resume-section-content">
                    {this.renderSkills(skillsAndTools.skills)}
                </div>
                <div class="resume-skill-item">
                    {this.renderOtherSkills(skillsAndTools.othersSkills)}
                </div>
                    
            </section>
        );
    }
}

export default SkillsAndTools