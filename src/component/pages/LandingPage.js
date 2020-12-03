import React from 'react'
import Header from '../layouts/Header'
import Search from './Search'
import Background from './world.jpg'

const LandingPage = () => {
    return (
        <div  className='bg brand-cp-overlay' style={{
            backgroundImage: `url("${Background}")`,
            backgroundRepeat: 'none',
          }}>
        
        <div   className='bg brand-cp-overlay'
        >
<Header />
<SearchBar />
        <div className="modal" id="modal">
          <div className="container">
            <button className="btn-back" id="back">
              <i className="fas fa-long-arrow-alt-left" />
              Back
            </button>
            <div className="wrapper flex">
              <img className="image" src alt="" />
              <div className="wrapper-body flex" />
            </div>
          </div>
        </div>
        <section>
          <div className="container countries" id="countries">
            <h2>Countries Loading...</h2>
          </div>
        </section>
      </div>
      </div>
        
    )
}

export default LandingPage
