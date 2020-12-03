import React, {useState}from 'react'

function SearchBar (props) {
    const {onSearch} = props;

    const [searchText, setSearchText] = useState ('');

    const handelInput = (e) => {
        const text = e.target.value
        setSearchText (text)
    }
    const handelEnterKeyPressed = (e) => {
        if (e.key === "Enter"){
            onSearch(searchText)
        }
    }

    return (
        <div>
            <div className='container search-box flex'>
            <div className="search-bar">
            <i className="fas fa-search" />
                <input type='text' className="search"  onChange={handelInput} 
                onKeyPress={handelEnterKeyPressed} 
                value={searchText} placeholder='Search your movies' />
                </div>
            </div>
        </div>
    )
}
export default SearchBar