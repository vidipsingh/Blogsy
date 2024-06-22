import React from 'react'
import './Navbar.css'
import github from '../Assets/icons8-github-50.png'
import linkedin from '../Assets/pngwing.com (8).png'
import twitter from '../Assets/icons8-twitterx-50.png'
import searchIcon from '../Assets/icons8-search-50.png'



const Navbar = () => {
  return (
    <div className='nav1'>
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/vidip-singh-a0aa5b23b/"><img src={linkedin} alt=""/></a> 
        <a href="https://github.com/vidipsingh"><img src={github} alt=""/></a>
        <a href="https://x.com/vidip2025"><img src={twitter} alt=""/></a>
      </div>

      <div className='name'>
        <a href="google.com">Blogsy</a>
      </div>

      <div className='searchBar'> <a href="google.com"><div className="search">SEARCH</div> <img src={searchIcon} alt="" className='searchIcon'/></a></div>
    </div>
  )
}

export default Navbar
