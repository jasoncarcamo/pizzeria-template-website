import React from "react";

const AppContext = React.createContext({
    userContext: {},
    menuItemsContext: {},
    itemIngredientsContext: {},
    orderItemsContext: {},
    ordersContext: {}
});

export default AppContext;

// Container for all contexts
export class AppProvider extends React.Component{

    componentDidMount(){
    }

    render(){
        const value = {
            userContext: this.props.userContext,
            menuItemsContext: this.props.menuItemsContext,
            itemIngredientsContext: this.props.itemIngredientsContext,
            orderItemsContext: this.props.orderItemsContext,
            ordersContext: this.props.ordersContext,
            cartContext: this.props.cartContext
        };

        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        );
    };
};