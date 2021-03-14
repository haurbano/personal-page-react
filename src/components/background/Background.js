import React from 'react';
import CareerSummary from './CareerSummary';
import Experience from './Experience';
import SkillsAndTools from './SkillAndTools';
import Interests from './Interests';
import Lenguages from './Lenguages';




    function Background() {
        return(
            <div>
                <div>
                    <CareerSummary/>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <Experience/>
                    </div>
                    <div class="col-lg-3">
                        <div>
                        <SkillsAndTools/>
                        </div>
                        <div>
                            <Interests/>
                        </div>
                        <div>
                            <Lenguages/>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

export default Background;