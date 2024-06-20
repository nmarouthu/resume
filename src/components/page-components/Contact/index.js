import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const Contact = (props) => {
    return (
        <Section {...props}>
            <div className="section-title">
                <h2>Contact</h2>
            </div>
            <div className="wrapper">
                <p>Please send an email to <a href="mailto:naveena.marouthu@gmail.com">Naveena Marouthu</a> with details</p>
            </div>
        </Section>
    )
}
export default Contact;