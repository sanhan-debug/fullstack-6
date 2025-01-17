import React from 'react'
import '../Navbar/style.css'

function Navbar() {
    return (
        <>
            <div className="container-navbar">
                <div className="logo">
                    <p>Furnish</p>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Colecction</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar