import { Component} from 'react';
import React from 'react';
import './NavbarComponentStyle.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook, faDoorOpen, faFlask, faHeart, faPlay} from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

class Navbar extends Component{
  render(){
    return(
      <div className={`container`}>

        <div className={`logo`}>
        </div>
      
        <div className={`side-navbar`}>
          <button><FontAwesomeIcon className={`icons`} icon={faPlay}></FontAwesomeIcon>Viewer</button>
          <button><FontAwesomeIcon className={`icons`} icon={faFlask}></FontAwesomeIcon>Editor</button>
          <button><FontAwesomeIcon  className={`icons`}icon={faHeart}></FontAwesomeIcon>Community</button>
          <button><FontAwesomeIcon className={`icons`} icon={faBook}></FontAwesomeIcon>Assets</button>
          <button><FontAwesomeIcon  className={`icons`}icon={faIdBadge}></FontAwesomeIcon>Profile</button>
          <button><FontAwesomeIcon className={`icons`} icon={faDoorOpen}></FontAwesomeIcon>Log out</button>
        </div>
        
       </div>
    )
  }
}


export default Navbar;

