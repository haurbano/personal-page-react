import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function HeaderPage() {
    return(
    <header class="header_area">
        <div class="main_menu">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container box_1620">
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                    <ul class="nav navbar-nav menu_nav ml-auto">
                        <li class="nav-item active"><Link class="nav-link" to="/home">Home</Link></li> 
                        <li class="nav-item"><Link class="nav-link" to="/background">Background</Link></li>
                    </ul> 
                </div> 
            </div>
        </nav>
        </div>
    </header>
    );
}

export default HeaderPage;