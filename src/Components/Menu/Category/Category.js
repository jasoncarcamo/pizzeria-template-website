import React from "react";
import CategoryLabels from "./CategoryLabels/CategoryLabels";

export default class Category extends React.Component{

    renderCategoryItems = (menuItemsContext)=>{
        let menuItems = menuItemsContext;

        menuItems = Object.keys(menuItems).map((menuItem, i)=>{
            return <CategoryLabels key={i} menuItem={menuItem}/>
        });

        return menuItems;
    };

    render(){
       
        return (
            <>
                {this.renderCategoryItems(this.props.menuItems)}
            </>
        );
    };
};