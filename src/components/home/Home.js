import React from 'react';

import profileImage from '../../images/profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faHackerrank, faMedium } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
		<div class="banner_inner d-flex align-items-center">
			<div class="banner_content">
				<div class="media">
					<div class="d-flex">
						<img class="img-fluid picture mx-auto hu-profile-img" src={profileImage} alt=""></img>
					</div>
					<div class="media-body">
						<div class="personal_text">
							<h6>Hello Everybody, i am</h6>
							<h3>Hamilton Urbano</h3>
							<p>Mobile Tech Lead at Mercadolibre</p>
							<p>Technology lover with a passion for well-implemented software and architectures. I'm always looking for improvements and being up to date about the latest technologies.</p>
							<ul class="list basic_info">
								<li><a href="#"><i class="lnr lnr-calendar-full"></i> 8 Septembre, 1993</a></li>
								<li><a href="#"><i class="lnr lnr-phone-handset"></i> (+57) 3108402718</a></li>
								<li><a href="#"><i class="lnr lnr-envelope"></i> haurbano.dev@gmail.com</a></li>
								<li><a href="#"><i class="lnr lnr-home"></i> Bogotá, Colombia</a></li>
							</ul>
							<ul class="list personal_social">
								<li><a class="hu-over" href="https://twitter.com/ha_urbano"><FontAwesomeIcon icon={faTwitter}/></a></li>
								<li><a class="hu-over" href="https://www.linkedin.com/in/haurbano"><FontAwesomeIcon icon={faLinkedin}/></a></li>
								<li><a class="hu-over" href="https://github.com/haurbano"><FontAwesomeIcon icon={faGithub}/></a></li>
								<li><a class="hu-over" href="https://www.hackerrank.com/haurbano_dev"><FontAwesomeIcon icon={faHackerrank}/></a></li>
								<li><a class="hu-over" href="https://medium.com/@hamiltonurbano"><FontAwesomeIcon icon={faMedium}/></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Home