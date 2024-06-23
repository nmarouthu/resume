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
                    <p>14+ years experience in architecting, designing and developing large scale technology & enterprise applications</p>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/naveena-marouthu-42347517/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </Section>
    )
}
export default Hero;