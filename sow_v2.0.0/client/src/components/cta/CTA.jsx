import React from 'react'
import './cta.scss';
import { NavLink } from "react-router-dom";

const CTA = (props) => {
  return (
    <div className={`cta-container-1 ${props.styleName1}`}>
      <ul>
        <li>
          <NavLink  
          reloadDocument
          className={`cta-1 ${props.styleName2}`}
          to='/book'
          >
          Book a Call
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default CTA
