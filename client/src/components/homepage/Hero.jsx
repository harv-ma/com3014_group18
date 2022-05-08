import React from "react";
import PropTypes from "prop-types";

const Hero = ({handleSearch}) => {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="text-center">
                            <h1 className="mb-5">Welcome to IndiReeds</h1>
                            <input placeholder="Search..." className="form-control form-control-lg" onChange={handleSearch}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    handleSearch: PropTypes.func,
}


export default Hero;