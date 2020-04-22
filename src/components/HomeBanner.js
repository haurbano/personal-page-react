import React from 'react';

import profileImage from '../images/profile.jpeg'

function HomeBanner() {
    return (
        <section class="home_banner_area">
           	<div class="container box_1620">
           		<div class="banner_inner d-flex align-items-center">
					<div class="banner_content">
						<div class="media">
							<div class="d-flex">
								<img class="img-fluid picture mx-auto" src={profileImage} alt=""></img>
							</div>
							<div class="media-body">
								<div class="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>Hamilton Urbano</h3>
									<h4>Sr. Android Developer</h4>
									<p>A lover for technology with passion for the well implemented software and architectures. I'm always looking for improve and be up to date about the latest technologies.</p>
									<ul class="list basic_info">
										<li><a href="#"><i class="lnr lnr-calendar-full"></i> 8 Septembre, 1993</a></li>
										<li><a href="#"><i class="lnr lnr-phone-handset"></i> (+57) 3108402718</a></li>
										<li><a href="#"><i class="lnr lnr-envelope"></i> haurbano.dev@gmail.com</a></li>
										<li><a href="#"><i class="lnr lnr-home"></i> Bogotá, Colombia</a></li>
									</ul>
									<ul class="list personal_social">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
    );
}

export default HomeBanner