import React from "react";
import { Link } from "react-router-dom"
export default function Details({ id, name, info, glass, image }) {
    return (
        <div className="card">
            <img src={image} alt="logo" className="images" />
            <h2>{name}</h2>
            <h4>{glass}</h4>
            <p>{info}</p>
            <Link to={`/cocktailsdetails/${id}`} className="card-link">Details</Link>
        </div>
    )
}