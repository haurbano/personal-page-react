import React from 'react';
import info from '../data/skills-basic-info.json'

function Interests() {
    return(
        <section class="resume-section interests-section mb-5">
            <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
            <div class="resume-section-content">
                <ul class="list-unstyled">
                    {info.interests.map( interest => (
                        <li class="mb-1">{interest}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Interests