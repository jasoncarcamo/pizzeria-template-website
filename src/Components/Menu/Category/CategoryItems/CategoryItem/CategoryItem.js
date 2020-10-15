import React from "react";
import "./CategoryItem.css";
import AppContext from "../../../../../Contexts/AppContext/AppContext";

export default class CategoryItem extends React.Component{

    static contextType = AppContext;

    setCurrentMenuItem = ()=>{
        this.context.menuItemsContext.setCurrentMenuItem(this.props.menuItem);
    }

    handleOrder = ()=>{

        this.setCurrentMenuItem();
        
        this.props.history.push(`${this.props.history.location.pathname}/${this.props.menuItem.name.toLowerCase().split(" ").join("_")}`)
    }
    render(){
        
        return(
            <div className="category-item-container">
                <p>{this.props.menuItem.name}</p>

                <button onClick={this.handleOrder}>Order Now</button>
            </div>
        );
    };
};