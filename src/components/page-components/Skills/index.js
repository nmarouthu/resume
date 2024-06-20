import { useState} from "react";
import Section from '../../base/Section';
import Progress from '../../base/Progress';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';

const Skills = (props) => {
    const skillsList = [
        {"label": "AEM", "value": "90"},
        {"label": "Java", "value": "80"},
        {"label": "GraphQL", "value": "75"},
        {"label": "HTML/CSS", "value": "80"},
        {"label": "Javascript", "value": "80"},
        {"label": "jQuery", "value": "80"},
        {"label": "AngularJS", "value": "70"},
        {"label": "React", "value": "75"}
    ];

    const keySkills = [
        {"label": "Collaboration", "value": "95"},
        {"label": "Leadership", "value": "80"},
        {"label": "Motivation", "value": "90"},
        {"label": "Creativity", "value": "70"},
        {"label": "Innovation", "value": "75"}
    ]

    return (
        <Section {...props}>
            <div className="section-title">
                <h2>Skills</h2>
            </div>
            <div className="wrapper">
                <div className="list">
                    { skillsList && skillsList.map(skillItem => (
                        <div className="list-item" key={skillItem.label}>
                            <Progress label={skillItem.label} value={skillItem.value}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="section-title">
                <h2>Additional Skills</h2>
            </div>
            <div className="key-skills-wrapper">
                { keySkills && keySkills.map(skillItem => (
                    <div key={skillItem.label} className="list-item">
                        <CircularProgressbar value={skillItem.value}
                            text={`${skillItem.value}%`}
                            styles={buildStyles({
                                      textColor: "greenyellow",
                                      pathColor: "greenyellow"
                                    })}></CircularProgressbar>
                        <div className="label">{skillItem.label}</div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills;