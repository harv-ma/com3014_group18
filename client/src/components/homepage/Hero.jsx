import React from "react";
import SearchBar from "./SearchBar";


const Hero = (handleSearch) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Welcome to IndiReeds</h1>
                            <p>Your dream job awaits you</p>
                        <SearchBar handleSearch={handleSearch} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;