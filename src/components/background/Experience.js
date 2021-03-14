import React from 'react';

import experiences from '../../data/experience.json'

class Experience extends React.Component {
	
	renderResponsbilities(list) {
		return(
			<ul>
				{list.map( item => (
					<li>{item}</li>
				))}
			</ul>
		);
	}

	renderTechnologies(list) {
		return(
			<ul>
				{list.map( item => (
					<li class="list-inline-item"><span class="badge badge-primary badge-pill">{item}</span></li>
				))}
			</ul>
		);
	}

    render() {
        return (
            <section class="resume-section text-left experience-section mb-5">
				<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
				<div class="resume-section-content">
					<div class="resume-timeline position-relative">
					{ experiences.map( (exp) => (
						<article class="resume-timeline-item position-relative pb-5">
							<div class="resume-timeline-item-header mb-2">
								<div class="d-flex flex-column flex-md-row">
									<h3 class="resume-position-title font-weight-bold mb-1">{exp.title}</h3>
									<div class="resume-company-name ml-auto">
										<a href={exp.proyect.link}>{exp.proyect.name}</a> - <a href={exp.company.link}>{exp.company.name}</a>
									</div>
								</div>
								<div class="resume-position-time">{exp.date}</div>
							</div>
							<div class="resume-timeline-item-desc">
								<p>{exp.resume}</p>
								{this.renderResponsbilities(exp.resposabilities)}
								<h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
								{this.renderTechnologies(exp.technologies)}
							</div>
						</article>
					))}
					</div>
				</div>
			</section>
        );
    }
}

export default Experience;