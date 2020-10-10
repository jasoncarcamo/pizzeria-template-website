import React from "react";

const MenuItemsContext = React.createContext({
    getMenuItems: ()=>{},
    addMenuItem: ()=>{},
    updateMenuItem: ()=>{},
    removeMenuItem: ()=>{}
});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: {},
            error: ""
        };
    };
    
    // retrieve all menu items
    getMenuItems = ()=>{
        return this.state.menuItems;
    };

    // adds menu item
    addMenuItem = (menuItem)=>{
        this.updateMenuItem(menuItem);
    };

    // updates a menu item
    updateMenuItem = (menuItem)=>{
        const menuItems = this.state.menuItems;

        if(menuItems[menuItem.category] === undefined){
            menuItems[menuItem.category] = {};
        };

        if(menuItems[menuItem.category][menuItem.id] === undefined){
            menuItems[menuItem.category][menuItem.id] = {}; 
        };

        menuItems[menuItem.category][menuItem.id] = menuItem;

        this.setState({
            menuItems
        });
    };

    // removes a menu item
    removeMenuItem = (menuItem)=>{
        const menuItems = this.state.menuItems;

        if(menuItems[menuItem.category] === undefined){
            return;
        };

        if(menuItems[menuItem.category][menuItem.id] === undefined){
            return; 
        };

        delete menuItems[menuItem.category][menuItem.id];

        this.setState({
            menuItems
        });
    };

    render(){
        const value = {
            getMenuItems: this.getMenuItems,
            addMenuItem: this.addMenuItem,
            updateMenuItem: this.updateMenuItem,
            removeMenuItem: this.removeMenuItem
        };
        
        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        );
    };
};