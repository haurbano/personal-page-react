import React from 'react';
import info from '../data/skills-basic-info.json'

function Education() {
    return(
        <section class="resume-section education-section mb-5">
            <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
            <div class="resume-section-content">
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <div class="resume-degree font-weight-bold">{info.education.title}</div>
                        <div class="resume-degree-org">{info.education.university}</div>
                        <div class="resume-degree-time">{info.education.year}</div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Education