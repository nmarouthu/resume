import { useState} from "react";
import Hero from "../../components/page-components/Hero";
import Header from "../../components/global/Header";
import About from "../../components/page-components/About";
import Work from "../../components/page-components/Work";
import Education from "../../components/page-components/Education";
import Skills from "../../components/page-components/Skills";
import Contact from "../../components/page-components/Contact";

import './index.css';

const ResumePage = () => {
    return (
        <>
            <Header id="header" className="header"></Header>
            <main id="container" className="container">
                <Hero id="hero" className="hero"></Hero>
                <About id="about" className="about"></About>
                <Work id="work" className="work"></Work>
                <Education id="education" className="education"></Education>
                <Skills id="skills" className="skills"></Skills>
                <Contact id="contact" className="contact"></Contact>
            </main>
        </>
    )
}
export default ResumePage;