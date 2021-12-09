import React, {}from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            
      <header>
        <div className="container">
        
          <h1>Search Your Movies   <i className="fas fa-compact-disc" /> </h1>
          <Link to="" className="btn-toggle" id="toggle">
            <i className="far fa-spin" />
      
            About
            <i className="far fa-spin" />
          </Link>
        </div>
      </header>
        </div>
    )
}

export default Header
