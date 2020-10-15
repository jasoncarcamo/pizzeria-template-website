import React from "react";

const MenuItemsContext = React.createContext({
    menuItems: {},
    currentMenuItem: {},
    getMenuItems: ()=>{},
    addMenuItem: ()=>{},
    updateMenuItem: ()=>{},
    removeMenuItem: ()=>{},
    setCurrentMenuItem: ()=>{},
    updateCurrentMenuItem: ()=>{},
    removeCurrentMenuItem: ()=>{}
});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentMenuItem: {},
            menuItems: {},
            error: ""
        };
    };

    componentDidMount(){
        this.fetchMenuItems();
    }

    fetchMenuItems = ()=>{
        fetch("http://localhost:8000/api/menu_items", {
            'content-type': "application/json",
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                resData.menuItems.forEach((data, index)=>{
                    this.addMenuItem(data);
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
    }
    
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
            menuItems[menuItem.category] = {};
        };

        if(menuItems[menuItem.category][menuItem.id] === undefined){
            menuItems[menuItem.category][menuItem.id] = {}; 
        };

        delete menuItems[menuItem.category][menuItem.id];

        this.setState({
            menuItems
        });
    };

    setCurrentMenuItem = (menuItem)=>{
        this.updateCurrentMenuItem(menuItem);
    }

    updateCurrentMenuItem = (menuItem)=>{
        this.setState({
            currentMenuItem: menuItem
        });
    }

    removeCurrentMenuItem = ()=>{
        this.setState({
            currentMenuItem: {}
        });
    }

    render(){
        const value = {
            menuItems: this.state.menuItems,
            getMenuItems: this.getMenuItems,
            addMenuItem: this.addMenuItem,
            updateMenuItem: this.updateMenuItem,
            removeMenuItem: this.removeMenuItem,
            currentMenuItem: this.state.currentMenuItem,
            setCurrentMenuItem: this.setCurrentMenuItem,
            updateCurrentMenuItem: this.updateCurrentMenuItem,
            removeCurrentMenuItem: this.removeCurrentMenuItem
        };
        
        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        );
    };
};