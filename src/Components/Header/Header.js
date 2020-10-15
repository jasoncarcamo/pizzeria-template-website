import React from "react";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return (
            <header id="header-container">
                <nav id="nav-bar-container">
                    <ul id="nav-links-container">
                        <li>
                            <NavLink
                                to=""
                                activeStyle={{
                                    
                                }}></NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu"
                                activeStyle={{
                                    
                                }}>Menu</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                activeStyle={{
                                    
                                }}></NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                activeStyle={{
                                    
                                }}></NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                activeStyle={{
                                    
                                }}></NavLink>
                        </li>
                        <li>
                            <NavLink
                                to=""
                                activeStyle={{
                                    
                                }}></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };
};