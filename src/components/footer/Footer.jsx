import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaGithub, FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'



const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">AHMED RAMADAN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100015579498274&mibextid=ZbWKwL" target="_blank" ><FaFacebookF/></a>
        <a href="https://www.ahmedramadan2410@gmail.com"  target="_blank"><MdOutlineEmail/></a>
        <a href="https://instagram.com/ahmedramadan2410?igshid=ZDdkNTZiNTM="  target="_blank"><FiInstagram/></a>
        <a href="https://api.WhatsApp.com/send?phone=201022134532"  target="_blank"><BsWhatsapp/></a>
        <a href="https://www.linkedin.com/in/ahmed-ramadan-46802326b"  target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ahmed-ramadan21"  target="_blank"><FaGithub/></a>
      </div>


      <div className="footer__copyright">
        <small>Copyright &copy;2023 All rights reserved | This portfolio is made by Ahmed Ramadan</small>
      </div>
    </footer>


  )
}

export default Footer