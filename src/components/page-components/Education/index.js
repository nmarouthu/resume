import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const Education = (props) => {
    const timelineEntries = [
        {"timeline": "2005-2009", "title": "Bachelors Degree", "location": "Bachelors in Computer Science & Engineering, JNT University, Kakinada, India"},
    ]

    return (
        <Section {...props}>
            <div className="section-title">
                <h2>Education</h2>
            </div>
            <div className="education-timeline">
                <ul className="timeline">
                    { timelineEntries && timelineEntries.map(timelineEntry => (
                        <li key={timelineEntry.timeline}>
                            <div className="timeline-info">{timelineEntry.timeline}</div>
                            <div className="timeline-panel">
                                <div className="heading">
                                    <h3>{timelineEntry.title}</h3>
                                    <span>{timelineEntry.location}</span>
                                </div>
                                {timelineEntry.description && <div className="content"><p>{timelineEntry.description}</p></div>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>

    )
}

export default Education;