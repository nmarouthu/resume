import { useState} from "react";
import Section from '../../base/Section'
import './index.css';

const Interests = (props) => {
    const links = [
        {"label": "Gardening", "icon": "fa-solid fa-seedling"},
        {"label": "Hiking", "icon": "fa-solid fa-person-hiking"},
        {"label": "Cooking","icon": "fa-solid fa-kitchen-set"},
        {"label": "Book Reading", "icon": "fa-solid fa-book"}
    ];
    return (
        <Section {...props}>
            <div className="section-title">
                <h2>Interests</h2>
            </div>
            <div className="wrapper">
                <div className="items">
                    { links && links.map(linkItem => (
                        <div key={linkItem.label} className="list-item">
                            <i className={linkItem.icon}></i>
                            <h3>{linkItem.label}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
export default Interests;