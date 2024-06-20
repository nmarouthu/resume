import { useState} from "react";
import './index.css';

const Section = ({children,...props}) => {
    return (
        <section {...props}>
            { children }
        </section>
    )
}

export default Section;