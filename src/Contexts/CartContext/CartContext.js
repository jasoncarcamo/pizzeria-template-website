import React from "react";

const CartContext = React.createContext({
    currentOrder: {},
    getCurrentOrder: ()=>{},
    setCurrentOrder: ()=>{},
    updateCurrentOrder: ()=>{},
    removeCurrentOrder: ()=>{}
});

export default CartContext;


// recieves current order info from orders context recieved from props
export class CartProvider extends React.Component{

    // retrieves current order
    getCurrentOrder = ()=>{
        return this.props.ordersContext.getCurrentOrder();
    }

    // sets current order
    setCurrentOrder = (order)=>{
        this.updateCurrentOrder(order);
    }

    // updates current order
    updateCurrentOrder = (order)=>{
        this.props.ordersContext.updateCurrentOrder(order);
    }

    // sets current order to default
    removeCurrentOrder = ()=>{
        this.props.ordersContext.removeCurrentOrder();
    }

    render(){
        const value = {
            currentOrder: this.props.ordersContext.currentOrder,
            getCurrentOrder: this.getCurrentOrder,
            setCurrentOrder: this.setCurrentOrder,
            updateCurrentOrder: this.updateCurrentOrder,
            removeCurrentOrder: this.removeCurrentOrder
        };

        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    };
};