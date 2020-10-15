import React from "react";
import "./CategoryLabels.css";
import {Link} from "react-router-dom";

export default class CategoryLabels extends React.Component{
    renderLabel = (name)=>{
        let newName = name;

        return newName;
    }
    render(){
        
        return (
            <section className="category-label-container">
                <Link to={`/menu/${this.renderLabel(this.props.menuItem)}`.toLowerCase()}><h3>{this.renderLabel(this.props.menuItem)}</h3></Link>
            </section>
        );
    };
}