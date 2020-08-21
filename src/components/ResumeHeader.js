import React, {useState} from 'react';
import { resumeContent } from '../resumeContent';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import './ResumeHeader.css';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ReactGA from 'react-ga';

// React 16.8 React hook
export default function ResumeHeader() {
    const [openSnackBar, setOpenSnackBar] = useState(false);
    return (
        <div className="background-color-purple full-size resume-header-style">
            <h2>{resumeContent.name}</h2>
            <h4>{resumeContent.title}</h4>
            <h5>{resumeContent.location}</h5>
            <p>{resumeContent.selfIntro}</p>
            <div>
                <Button color="primary" startIcon={<EmailIcon />} onClick={handleEmailButtonClick}>
                    {resumeContent.email}
                </Button>
            </div>
            <div>
                <PhoneIcon />{resumeContent.phone}
            </div>
            <div>
                <Button color="primary" startIcon={<GitHubIcon />} onClick={handleGithubClick}>
                    {resumeContent.github}
                </Button>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    Email {resumeContent.email} copied successful!
                </Alert>
            </Snackbar>
        </div>
    );

    function handleEmailButtonClick() {
        // send email button click event
        ReactGA.event({
            category: "User",
            action: "Email button clicked"
        });
        navigator.clipboard.writeText(resumeContent.email)
            .then(() => {
                setOpenSnackBar(true);
            });
    }

    function handleSnackbarClose() {
        setOpenSnackBar(false);
    }

    function handleGithubClick() {
        // send github button click event
        ReactGA.event({
            category: "User",
            action: "Github button clicked"
        });
        window.open(`https://github.com/${resumeContent.github}`);
    }
}