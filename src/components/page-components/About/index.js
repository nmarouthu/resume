import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const About = (props) => {
    const bioDataAttributes = [
        {"label": "Name", "value": "Naveena Marouthu"},
        {"label": "Experience", "value": "14 Years"},
        {"label": "Degree", "value": "Bachelors in Computer Science & Engineering"},
        {"label": "Lives in", "value": "California, USA"},
        {"label": "Email", "value": "Naveena.Marouthu@gmail.com"}
    ]

    const keySkills = [
        {"label": "System Design & Architecture"},
        {"label": "Full Stack Developer"},
        {"label": "Digital Content & Asset Management"},
        {"label": "Product Information Management & Ecommerce"},
        {"label": "Data Analytics & insights"},
        {"label": "Learn and adapt to new Technologies"},
        {"label": "Innovative & Think beyond POC's"}
    ]

    return (
        <Section {...props}>
            <div className="section-title">
                <h2>About Me</h2>
            </div>
            <div className="wrapper">
                <div className="biodata">
                    <div className="photo-wrapper">
                        <img className="photo"
                             src={`${process.env.PUBLIC_URL}/images/naveena.jpg`}></img>
                    </div>
                    <ul>
                        { bioDataAttributes && bioDataAttributes.map(dataItem => (
                            <li key={dataItem.label}>
                                <span className="label">{dataItem.label}:</span><span className="value">{dataItem.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="summary">
                    <div className="overview fadeInUP">
                        <div className="sub-section-title"><h3>Overview</h3></div>
                        <div className="details">
                            I&apos;ve Architected, designed & developed many large scale technology & enterprise applications by identifying customer needs, defining operational frameworks and executing ideas that solve problems effectively. As an individual, I&apos;m self-confident. You&apos;ll find me creative, funny and naturally passionate. I&apos;m a forward thinker, which others may find inspiring when working as a team.
                        </div>
                    </div>
                    <div className="roles-responsibilities fadeInUP">
                        <div className="sub-section-title"><h3>What I Do  ?</h3></div>
                        <div className="details">
                            I&apos;m an Adobe certified AEM Architect with 8+ years experience building complex solutions using AEM on-prem, hybrid, cloud and fully headless mode(s) with customizations on top of AEM as necessary by integrating with multiple Adobe Product Suites and enterprise services.
                        </div>
                        <div className="key-skills">
                            <ul>
                                { keySkills && keySkills.map(skillItem => (
                                    <li key={skillItem.label}>
                                        {skillItem.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default About;