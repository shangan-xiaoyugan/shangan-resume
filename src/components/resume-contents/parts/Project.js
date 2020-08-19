import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { resumeContent } from '../../../resumeContent';

export default function Project() {
    return (
        <div>
            <div className="font-color-purple margin-bottom-title"><StarIcon /> Project</div>
            {renderProject()}
        </div>
    );

    function renderProject() {
        return resumeContent.projects.map(project => {
            return (
                <div>
                    <b className="margin-left-content">{project.title}</b>
                    <ul>
                        {project.details.map(detail => <li className="grey">{detail}</li>)}
                    </ul>
                </div>
            );
        })
    }
}