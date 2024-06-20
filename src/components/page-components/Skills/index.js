import { useState} from "react";
import Facts from "../Facts";
import Strengths from "../Strengths";
import Interests from "../Interests";
import Section from '../../base/Section'
import './index.css';

const Skills = (props) => {
    return (
        <Section {...props}>
            <Facts id="facts" className="facts"></Facts>
            <Strengths id="strength" className="strengths"></Strengths>
            <Interests id="interests" className="interests"></Interests>
        </Section>
    )
}

export default Skills;