import React from 'react';
import WorkIcon from '@material-ui/icons/Work';
import { resumeContent } from '../../../resumeContent';

export default function Experience() {
    return (
        <div>
            <div className="font-color-purple margin-bottom-title"><WorkIcon /> Experience</div>
            {renderExperience()}
        </div>
    );

    function renderExperience() {
        return resumeContent.experiences.map(experience => {
            return (
                <div>
                    <b className="margin-left-content">{experience.title}</b>
                    <div className="margin-left-content">{experience.company}</div>
                    <div className="margin-left-content">{experience.date}</div>
                    <ul>
                        {experience.details.map(detail => <li className="grey">{detail}</li>)}
                    </ul>
                </div>
            );
        })
    }
}