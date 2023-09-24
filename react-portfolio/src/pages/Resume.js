import resumePdf from '../assets/TannerRhinesResume.pdf';


export default function Resume() {

    return (
      <div className="resume-container">
        <h1>Resume</h1>
        
        <section>
          <h3>Education</h3>
          <ul> 
          <li>UC Berkeley Extension Coding Bootcamp</li>
          
          </ul>
          
        </section>
        
        <section>
          <h3>Certifications</h3>
          <ul>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            

          </ul>
          <li className="sideNote"> currently studying for Architect Professional and Security Specialty</li>
        </section>
        
        <section>
          <h3>Front-end Proficiencies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        
        <section>
          <h3>Back-end Proficiencies</h3>
          <ul>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MySQL/Sequelize</li>
            <li>MongoDB/Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </section>


        <section>
          <a href={resumePdf} download="Tanner-Resume.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </section>
        
      </div>
    );
  }
  