import React from 'react';

class ResumeDownload extends React.Component {
  constructor(props) {
    super(props);

    // Define the URL for your cybersecurity resume
    this.cybersecurityResumeUrl =
      'https://docs.google.com/document/d/e/2PACX-1vQVg3fziCzpMeB40h1yrG4cySUWe18AhCAcPoA1FIICZdFmFC4iZR9Vl-bs2al1NQdMDE4IS7fp9mbO/pub?embedded=false';
  }

  render() {
    return (
      <div>
        <h2>Download Cybersecurity Resume</h2>
        <a href={this.cybersecurityResumeUrl} download="cybersecurity_resume.pdf">
          <button className='btn btn-outline-primary'>Download Resume</button>
        </a>
      </div>
    );
  }
}

export default ResumeDownload;
// I'll be using the following URLs for my resumes:
// Web development resume
// https://docs.google.com/document/d/18HMGhkFWf1wnpT0311fIo3C2vDBDXI5PXpWKQ7Tc_9g/edit?usp=sharing
// cyber link
// https://docs.google.com/document/d/1h_-SRONtivUg_IrAdnurPFLNINeAxw_55CUZ7gcoL9E/edit?usp=drive_link