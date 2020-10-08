import React from "react";

const MenuItemsContext = React.createContext({

});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component{
    render(){
        const value = {

        };
        
        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        )
    }
}