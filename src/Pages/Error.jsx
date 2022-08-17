import React from "react";
import {Link} from "react-router-dom"
export default function Error(){
    return (
        <section className="Error-container">
            <h1>oops! it's a dead end</h1>
            <Link to="/" className="Links-btn">BACK HOME</Link>

        </section>

    )
}