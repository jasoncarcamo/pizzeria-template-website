import React from "react";

const OrdersContext = React.createContext({

});

export default OrdersContext;

export class OrdersProvider extends React.Component{
    render(){
        const value = {

        };

        return (
            <OrdersContext.Provider value={value}>
                {this.props.children}
            </OrdersContext.Provider>
        );
    };
};