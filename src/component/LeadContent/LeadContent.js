import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function LeadContent() {
    return (
        <div id="lead">
            <div id="lead-content">
                <h1>Connor R. Cote</h1>
                <h2>Operating Associate</h2>
                <a href="./Assets/Connor R. Cote Resume.pdf" class="btn-rounded-white" download>Download Resume</a>
            </div>

            <div id="lead-overlay"></div>

            <div id="lead-down">
                <span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    )
}

export default LeadContent;