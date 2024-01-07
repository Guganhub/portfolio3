import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';


import '../styles/Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi , My Name is Guganeshwaran R</h2>
        <div className='prompt'>
            <p>A Full Stack Developer who loves in developing, designing, and maintaining software applications.</p>


        </div>
       
         <div className='contact1'>
        <h1>Contact</h1>
        </div>
        <div className='address'>
          <p><LocationOnIcon/>2/221 Maruthi Nagar 1st cross sipcot-1 Hosur 635126</p>
        </div>
        <div className='phone'>
          <p><CallIcon/>&nbsp;7812823597</p>
        </div>
        <div className='mail'>
          <p><EmailIcon/>&nbsp;guganesh12345@gmail.com</p>
        </div>
        <div className='resume'>
          <p><PictureAsPdfIcon/>&nbsp;<a href='https://drive.google.com/file/d/1dTEQQG5-WqlDHRZqDyPJgtk4XbhgqCrB/view?usp=sharing' target='_blank' rel='noreferrer'>Resume</a></p>
          
        </div>
        <div className='soc'>
        <a href='https://www.linkedin.com/in/guganeshwaran-r-b840b414b' target='_blank' rel='noreferrer'><LinkedInIcon/></a>
        &nbsp;&nbsp;
          <a href='https://github.com/Guganhub' target='_blank' rel='noreferrer'><GitHubIcon/></a>

        </div>
       
      </div>
      
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>HTML, CSS, Javascript, Reactjs</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Nodejs, ExpressJs, MySQL, Mongodb, Mongoose</span>
            </li>
            <li className='item'>
                <h2>Languages</h2>
                <span>Java, C , Python</span>
            </li>
        </ol>
      </div>

    </div>
  )
}

export default Home
