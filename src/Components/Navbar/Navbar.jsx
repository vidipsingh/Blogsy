import React, {useState} from 'react'
import './Navbar.css'
import github from '../Assets/icons8-github-50.png'
import linkedin from '../Assets/pngwing.com (8).png'
import twitter from '../Assets/icons8-twitterx-50.png'
import searchIcon from '../Assets/icons8-search-50.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  const handlePopupClick = () => {
    setShowPopup(!showPopup); // Toggle popup visibility on click
  };

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

      <div className='searchBar' > 
      <a href="#" className='searchButton' onClick={handlePopupClick} >
      <div className="search">SEARCH</div>
      <img src={searchIcon} alt="" className='searchIcon'/>
      </a>
      {showPopup && (
        <div className="searchPopup">
          <div className="searchPopupContent">
            {/* Your search input and other search-related elements go here */}
            <input type="text" placeholder="Search..." className="searchInput" />
            {/* You can add more elements here based on your search functionality */}
          </div>
          <button className="closeButton" onClick={handlePopupClick}>
            Close
          </button>
        </div>
      )}

      <div className="user">
      <a href=""><FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5em',paddingLeft:'1em',marginTop:'0.1em', color:'white' }}/></a>
      </div>
      </div>
    </div>
  )
}

export default Navbar
