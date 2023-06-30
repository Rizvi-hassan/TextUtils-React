import React, { useState } from "react";

import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {

  const [shadow, setShadow] = useState({
    color1: '', color2: '', color3: '', color4: '', color5: 'shadow'
  })

  const setColor1 = () =>{
    props.toggleTheme('purple');
    setShadow({color1: 'shadow', color2: '', color3: '', color4: '', color5: ''})
    props.showAlert('Theme changed', 'success')
  }
  const setColor2 = () =>{
    props.toggleTheme('red');
    setShadow({color1: '', color2: 'shadow', color3: '', color4: '', color5: ''})
    props.showAlert('Theme changed', 'success')
  }
  const setColor3 = () =>{
    props.toggleTheme('green');
    setShadow({color1: '', color2: '', color3: 'shadow', color4: '', color5: ''})
    props.showAlert('Theme changed', 'success')
  }
  const setColor4 = () =>{
    props.toggleTheme('black');
    setShadow({color1: '', color2: '', color3: '', color4: 'shadow', color5: ''})
    props.showAlert('Theme changed', 'success')
  }
  const setColor5 = () =>{
    props.toggleTheme('white');
    setShadow({color1: '', color2: '', color3: '', color4: '', color5: 'shadow'})
    props.showAlert('Theme changed', 'success')
  }

  return (
    <nav className={`new-nav navbar navbar-expand-lg navbar-${props.theme.nav} `}>
      <div className="container-fluid  ">
        <Link className="navbar-brand  " to="/" >
          {props.title}
        </Link>
        <hr className="partition"/>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " aria-expanded='false' to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="about">
              {props.about}
              </Link>
            </li>
          </ul>
          
          <div className="theme-box" style={{display: 'flex'}}>
            <button className={`color-boxes ${shadow.color1}`} id="color1" onClick={setColor1}></button>
            <button className={`color-boxes ${shadow.color2}`} id="color2" onClick={setColor2}></button>
            <button className={`color-boxes ${shadow.color3}`} id="color3" onClick={setColor3}></button>
            <button className={`color-boxes ${shadow.color4}`} id="color4" onClick={setColor4}></button>
            <button className={`color-boxes ${shadow.color5}`} id="color5" onClick={setColor5}></button>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button> */}
          {/* </form> */}


        </div>
      </div>
    </nav>
  ) 
};


Navbar.propTypes = {title: PropTypes.string, 
  aobut: PropTypes.string};

Navbar.defaultProps = {
  title: "Set The title here",
  about:"Set the about here"
};