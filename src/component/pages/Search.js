import React from 'react'

const Search = () => {
    const onSubmit  = e => {
        e.preventDefault();
        getCountries();

        async function getCountries() {
            const res = await fetch('https://restcountries.eu/rest/v2/all');
      
        
     
        }
    }

   const  onChange = e => {

   }
       
    return (
        <div>
           <section>
           <form onSubmit={onSubmit} >
        <div className="container search-box flex">
          <div className="search-bar">
            <i className="fas fa-search" />
          
            <input id="search" className="search" type="text" placeholder="Search for a country"
            onChange={onChange}/>
          
          </div>
          <div className="dropdown" id="filter">
            Filter by Region
            <i className="fas fa-chevron-down" />
            <ul>
              <li>All</li>
              <li>Africa</li>
              <li>Americas</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
        </form>
      </section>  
        </div>
    )
}

export default Search
