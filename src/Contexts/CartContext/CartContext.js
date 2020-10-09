import React from "react";

const CartContext = React.createContext({
    currentOrder: {},
    getCurrentOrder: ()=>{},
    setCurrentOrder: ()=>{},
    updateCurrentOrder: ()=>{},
    removeCurrentOrder: ()=>{}
});

export default CartContext;

export class CartProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentOrder: {}
        };
    };

    // retrieves current order
    getCurrentOrder = ()=>{
        return this.context.ordersContext.getCurrentOrder();
    }

    // sets current order
    setCurrentOrder = (order)=>{
        this.updateCurrentOrder(order);
    }

    // updates current order
    updateCurrentOrder = (order)=>{
        this.context.ordersContext.updateCurrentOrder(order);
    }

    // sets current order to default
    removeCurrentOrder = ()=>{
        this.context.ordersContext.removeCurrentOrder();
    }

    render(){
        const value = {
            currentOrder: this.props.ordersContext.currentOrder,
            getCurrentOrder: this.getCurrentOrder,
            setCurrentOrder: this.setCurrentOrder,
            updateCurrentOrder: this.updateCurrentOrder,
            removeCurrentOrder: this.removeCurrentOrder
        };

        console.log(this.props.ordersContext)

        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    };
};