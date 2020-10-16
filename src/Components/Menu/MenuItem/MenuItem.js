import React from "react";
import AppContext from "../../../Contexts/AppContext/AppContext";
import MenuItemIngredient from "./MenuItemIngredient/MenuItemIngredient";

export default class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentMenuItem: {}
        };
    };

    static contextType = AppContext;

    componentDidMount(){

        if(!Object.keys(this.props.menuItemsContext.currentMenuItem).length){
            let pathName = this.props.history.location.pathname.split("/");

            pathName.pop();

            pathName = pathName.join("/");

            return this.props.history.push(pathName);
        };

        this.setState({
            currentMenuItem: this.props.menuItemsContext.currentMenuItem
        });
    };

    componentWillUnmount(){
        this.setState({
            currentMenuItem: {}
        });
    }

    getItemIngredients = ()=>{
        const itemIgredients = this.context.itemIngredientsContext.itemIngredients;
        let menuItemIngredients = itemIgredients[this.context.menuItemsContext.currentMenuItem.category];

        // exits function in case there is no current menu in context
        // mainly in case a user refreshes
        if(!this.context.menuItemsContext.currentMenuItem.category){
            return;
        };

        menuItemIngredients = Object.keys(menuItemIngredients).map((key, index)=>{

            return <MenuItemIngredient key={index} menuItemIngredient={menuItemIngredients[key]}/>;
        });

        return menuItemIngredients;
    }

    render(){
        console.log(this.context);
        return(
            <section className="menu-item-container">
                {this.getItemIngredients()}
            </section>
        );
    };
};