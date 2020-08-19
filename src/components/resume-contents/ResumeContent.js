import React from 'react';
import Experience from './parts/Experience';
import './ResumeContent.css';
import Project from './parts/Project';
import Education from './parts/Edcutation';
import Skills from './parts/Skills';

// React 16.8 React hook
export default function ResumeContent() {
    return (
        <div>
            <Experience />
            <Project />
            <Education />
            <Skills />
        </div>
    );
}