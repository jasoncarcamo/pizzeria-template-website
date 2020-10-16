import React from "react";

export default class MenuItemIngredient extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                {this.props.menuItemIngredient.name}
            </div>
        )
    }
}