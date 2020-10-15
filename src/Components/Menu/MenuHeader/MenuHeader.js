import React from "react";
import {Link} from "react-router-dom";
import AppContext from "../../../Contexts/AppContext/AppContext";
import "./MenuHeader.css";

export default class MenuHeader extends React.Component{

    static contextType = AppContext;

    renderMenuHeader = (menuItemsContext)=>{
        let menuItems = menuItemsContext;

        menuItems = Object.keys(menuItems).map((menuItem, i)=>{
            return (
                <li key={i}>
                    <Link to={`/menu/${menuItem.toLowerCase()}`}>{menuItem}</Link>
                </li>
            );
        });

        return menuItems;
    };

    render(){
        
        return (
            <ul id="menu-header">
                {this.renderMenuHeader(this.props.menuItems)}
            </ul>
        )
    }
}