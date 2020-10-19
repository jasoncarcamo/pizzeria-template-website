import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryItems.css";

export default class CategoryItems extends React.Component{

    // gets category type from url params
    //Which is all lower case but the firt letter is uppercase in our state in menu items context
    getCategoryType = ()=>{
        const pathname = this.props.history.location.pathname;
        let category = pathname.split("/")[2];
        let categorySplit = category.split("");

        categorySplit[0] = categorySplit[0].toUpperCase();

        category = categorySplit.join("");

        return category;
    };

    getCategoryItems = (menuItemsContext)=>{
        let menuItems = menuItemsContext;
        let category = this.getCategoryType();

        menuItems = menuItems[category];

        return menuItems;
    }

    renderCategoryItems = (menuItemsContext)=>{
        const menuItems = this.getCategoryItems(menuItemsContext);

        if( !menuItems){
            return [];
        };

        let categoryItems = Object.keys(menuItems).map((menuItem, i)=>{
            
            return <CategoryItem key={i} menuItem={menuItems[menuItem]} history={this.props.history}/>
        });

        return categoryItems
    };

    render(){

        return (
            <section className="category-items-container">
                {this.renderCategoryItems(this.props.menuItems)}
            </section>
        );
    };
};