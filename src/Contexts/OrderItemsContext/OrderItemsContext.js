import React from "react";

const OrderItemsContext = React.createContext({

});

export default OrderItemsContext;

export class OrderItemsProvider extends React.Component{
    render(){
        const value = {

        };

        return (
            <OrderItemsContext.Provider value={value}>
                {this.props.children}
            </OrderItemsContext.Provider>
        )
    }
}