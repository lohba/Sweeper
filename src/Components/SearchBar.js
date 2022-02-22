import React from 'react';
import "../App.css";
import {useState} from 'react';

function SearchBar() {   
    const [search, setSearch] = useState(""); 
    const [results, setResults] =useState([]);
    const [searchInfo, setSearchInfo] = useState({});

    const handleSearch = async e => {
        e.preventDefault();
        if( search === '') return;

        const endpoint = await fetch(`https://testnets-api.opensea.io/api/v1/collection/${search}`);
        const {collection} = await endpoint.json();
        console.log(collection.primary_asset_contracts)
        //console.log(collection.primary_asset_contracts[0].name)
        //setResults(json.query.search);
        //setSearchInfo(json.query.searchInfo);
        //const endpoint = `https://testnets-api.opensea.io/api/v1/collection/${search}`;
        //const response = await fetch(endpoint);
        //console.log(response);
    }

    return (
            <div className="SearchBar">
                <header>
                    <h1>Sweeper</h1>
                    <form className="search-box" onSubmit={handleSearch}>
                        <input 
                        type="search" 
                        placeholder="Search for NFT"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        />
                        
                    </form>
                    {/* {(searchInfo(totalhits))} */}
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