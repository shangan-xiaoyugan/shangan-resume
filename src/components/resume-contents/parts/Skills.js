import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { resumeContent } from '../../../resumeContent';
import Chip from '@material-ui/core/Chip';

export default function Skills() {
    return (
        <div>
            <div className="font-color-purple margin-bottom-title margin-top-16px"><AttachFileIcon /> Skills</div>
            {renderSkills()}
        </div>
    );

    function renderSkills() {
    return resumeContent.skills.map(skill => <Chip clickable 
        label={skill} className="background-color-purple margin-left-content"
        size="small" /> )
    }
}