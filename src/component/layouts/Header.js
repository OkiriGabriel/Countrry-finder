import React from 'react'

const Header = () => {
    return (
        <div>
            
      <header>
        <div className="container">
          <h1>Where in the world?</h1>
          <button className="btn-toggle" id="toggle">
            <i className="far fa-moon" />
            <i className="fas fa-moon" />
            Dark Mode
          </button>
        </div>
      </header>
        </div>
    )
}

export default Header
