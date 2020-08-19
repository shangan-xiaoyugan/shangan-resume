import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResumeHeader from './components/ResumeHeader';
import ResumeContent from './components/resume-contents/ResumeContent';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
      <Grid container justify="center">
          <Grid container item xs={4}>
            <ResumeHeader />
          </Grid>
          <Grid container item xs={8}>
            <ResumeContent />
          </Grid> 
      </Grid>
  );
}

export default App;
