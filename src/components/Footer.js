import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/human_being_2508' target='_blank' rel='noreferrer'><InstagramIcon/></a>
            <a href='https://www.linkedin.com/in/guganeshwaran-r-b840b414b'target='_blank' rel='noreferrer'><LinkedInIcon/></a>
            <a href='https://github.com/Guganhub'target='_blank' rel='noreferrer'><GitHubIcon/></a>
            <a href='https://twitter.com/guganeshwaran1'target='_blank' rel='noreferrer'><TwitterIcon/></a>
        </div>

        <p><CallIcon className='contact'/>&nbsp;<span>78128&nbsp;23597 &nbsp;</span><EmailIcon/>&nbsp;&nbsp;<span>guganesh12345@gmail.com</span></p>
        <p>&copy; 2023 Guganeshwaran </p>
      
    </div>
  )
}

export default Footer
