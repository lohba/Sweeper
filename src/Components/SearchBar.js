import React from 'react';
import "../App.css";

function SearchBar({placeholder, data}) {
  return (
        <div className="SearchBar">
            <header>
                <h1>Sweeper</h1>
                <form className="search-box">
                    <input type="search" placeholder="Search for NFT"/>
                </form>
                <p>Search Results: 0</p>
            </header>
            <div className='results'>
                <div className='result'>
                    <h3>Title Goes Here</h3>
                    <p>Results</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
  )
}

export default SearchBar