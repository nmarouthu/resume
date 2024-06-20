import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const Work = (props) => {
    const timelineEntries = [
        {"timeline": "2022*", "title": "AEM Technology Specialist / Architect", "location": "Evolutyz Corp., USA", "description": "Architected & delivered highly secured, scalable application"},
        {"timeline": "2016 - 2022", "title": "AEM Technology Specialist / Architect", "location": "Cognizant Technology Solutions, USA", "description": "Designed & delivered highly secured, scalable & dynamic applications."},
        {"timeline": "2014 - 2016", "title": "Sr. Consultant", "location": "Client: Novartis, Employer: Accenture, INDIA", "description": "Designed & developed Extensive Dynamic implementation for Warehouse Management"},
        {"timeline": "2010 - 2014", "title": "Sr. Consultant", "location": "Client: John Deere, Employer: Yash Technologies Pvt. Ltd., INDIA", "description": "Designed & developed many scalable & dynamic implementations to support content migration"}
    ]

    return (
        <Section {...props}>
            <div className="section-title">
                <h2>Work</h2>
            </div>
            <div className="work-timeline">
                <ul className="timeline">
                    { timelineEntries && timelineEntries.map((timelineEntry, index) => (
                        <li key={timelineEntry.timeline} className={(index % 2) == 1 ? 'timeline-inverted': ''}>
                            <div className="timeline-info">{timelineEntry.timeline}</div>
                            <div className="timeline-panel">
                                <div className="heading">
                                    <h3>{timelineEntry.title}</h3>
                                    <span>{timelineEntry.location}</span>
                                </div>
                                <div className="content"><p>{timelineEntry.description}</p></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}
export default Work;