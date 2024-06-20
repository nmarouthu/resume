import { useState} from "react";
import Section from '../../base/Section';
import './index.css';

const Achievements = (props) => {
    const links = [
        {"label": "Years Experience", "value": "14", "icon": "fa-solid fa-briefcase"},
        {"label": "Projects", "value": "15", "icon": "fa-solid fa-list-check"},
        {"label": "Certificates", "value": "2", "icon": "fa-solid fa-certificate"},
        {"label": "Awards", "value": "3", "icon": "fa-solid fa-trophy"}
    ];
    return (
        <Section {...props} style={{background: "url(/resume/images/main_image.jpg) no-repeat center center"}}>
            <div className="wrapper">
                <div className="section-title">
                    <h2>Achievements</h2>
                </div>
                <div className="items">
                    { links && links.map(linkItem => (
                        <div key={linkItem.label} className="list-item">
                            <i className={linkItem.icon}></i>
                            <h3>{linkItem.value}</h3>
                            <p>{linkItem.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
export default Achievements;