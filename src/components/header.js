import React from 'react'
import { Link } from 'gatsby'
import Freecodecamp from "../images/freecodecamp_logo.svg";

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'darkgreen',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem',
      }}
    >
    <img src={Freecodecamp} alt="Logo" style={{
      margin: '0'
    }}/>
    </div>
  </div>
)

export default Header
