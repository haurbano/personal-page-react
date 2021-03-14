import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderPage() {
    return(
    <header class="header_area">
        <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container box_1620">
                <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></img></a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button> */}
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li> 
                        <li class="nav-item"><a class="nav-link" href="about-us.html">Background</a></li>
                    </ul> 
                </div> 
            </div>
        </nav>
        </div>
    </header>
    );
}

export default HeaderPage;