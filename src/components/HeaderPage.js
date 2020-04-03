import React from 'react';
import profileImage from '../images/profile.jpeg'

import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderPage() {
    return(
        <header class="resume-header pt-4 pt-md-0">
			<div class="media flex-column flex-md-row">
				<img class="mr-3 img-fluid picture mx-auto" src={profileImage} alt="Profile Image"></img>
				<div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                    <div class="primary-info">
                        <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Hamilton Urbano</h1>
                        <div class="title mb-3">Sr. Android Engineer</div>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="mailto:haurbano.dev@gmail.com"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>haurbano.dev@gmail.com</a></li>
                            <li><a href="tel:+57 3108402718"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+57 3108402718</a></li>
                        </ul>
                    </div>
                    <div class="secondary-info ml-md-auto mt-2">
                        <ul class="resume-social list-unstyled">
                            <li class="mb-3"><a href="https://www.linkedin.com/in/haurbano"><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span>www.linkedin.com/in/haurbano</a></li>
                            <li class="mb-3"><a href="https://github.com/haurbano"><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span>github.com/haurbano</a></li>
                            <li><a href="https://haurbano.github.io"><span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>haurbano.github.io</a></li>
                        </ul>
                    </div>
				</div>
            </div>
		</header>
    );
}

export default HeaderPage;