import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import { resumeContent } from '../../../resumeContent';

export default function Education() {
    return (
        <div>
            <div className="font-color-purple margin-bottom-title"><SchoolIcon /> Education</div>
            {renderEducation()}
        </div>
    );

    function renderEducation() {
        return resumeContent.educations.map(eduction => {
            return (
                <div>
                    <b className="margin-left-content">{eduction.major}</b>
                    <div className="margin-left-content">{eduction.date}</div>
                    <div className="margin-left-content grey">{eduction.school}</div>
                </div>
            );
        })
    }
}