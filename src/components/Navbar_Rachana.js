import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems_Rachana";
import {Link } from "react-router-dom";
class Navbar extends Component {
    state = { clicked: false }; 
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Coruscate</h1>
                
               
                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}> {}
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}> 
                                <Link className={item.cName} to={item.url}> 
                                    <i className={item.icon}></i> 
                                    {item.title} 
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
