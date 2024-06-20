import { useState} from "react";
import Skills from "../Skills";
import Interests from "../Interests";
import Section from '../../base/Section';
import './index.css';

const SkillSet = (props) => {
    return (
        <div {...props}>
            <Skills id="skills" className="facts"></Skills>
            <Interests id="interests" className="interests"></Interests>
        </div>
    )
}

export default SkillSet;