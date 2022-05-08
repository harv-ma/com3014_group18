import React from "react";


const SearchBar = () => {
    return (
        <div className="search">
        <div className="inner">
        <label className="searchTitle">Job Title</label>
        <input placeholder="Teacher"></input>
        <div className="itemhidden"></div>
        <label className="searchTitle">Location⠀</label>
        <input placeholder="Guildford"></input>
        <div className="itemhidden"></div>
        <button className="button" type="button">Search</button>
        <div className="itemhidden"></div>
        </div>
    </div>
    );
}

export default SearchBar;