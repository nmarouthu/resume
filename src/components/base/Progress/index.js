import { useState} from "react";
import './index.css';

const Progress = (props) => {
    return (
        <>
            <div className="label"><h3>{props.label}</h3></div>
            <div className="progress-bar">
                <progress className="value" value={props.value} max="100"></progress>
                <span className="percentage-display">{props.value}%</span>
            </div>
        </>
    )
}

export default Progress;