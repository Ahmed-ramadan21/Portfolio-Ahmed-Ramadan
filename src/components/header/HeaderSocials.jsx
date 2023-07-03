import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ahmed-ramadan-46802326b"  target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ahmed-ramadan21"  target="_blank"><FaGithub/></a>
        <a href="https://www.ahmedramadan2410@gmail.com"  target="_blank"><MdOutlineEmail/></a>

    </div>
  )
}

export default HeaderSocials