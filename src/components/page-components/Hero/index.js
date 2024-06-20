import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const Hero = (props) => {
    return (
        <Section {...props} style={{background: "url(/resume/images/main_image.jpg) no-repeat center center"}}>
            <div className="details">
                <div className="job-title">
                    <div className="self">I&apos;m an</div>
                    <div className="title">AEM <span>Architect</span></div>
                </div>
                <div className="summary">
                    <p>14+ years experience building highly secured, scalable & highly available applications</p>
                </div>
                <div className="social">

                </div>
            </div>
        </Section>
    )
}
export default Hero;