import React, { useState } from 'react'
import './cta.scss';
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
      <Link to="/book">Book a Call</Link>
    </div>
  )
}

export default CTA
