import React from "react";
import { Link, useLocation } from "react-router-dom";

function Button(props) {
    const location = useLocation();
    return (
        <Link to="/contact" className="contact-button">
          <button>{props.label}</button>
        </Link>  
    );
}

export default Button