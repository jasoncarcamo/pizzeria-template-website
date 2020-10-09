import React from "react";

const OrdersContext = React.createContext({
    currentOrder: ()=>{},
    orders: ()=>{},
    getOrders: ()=>{},
    addOrder: ()=>{},
    updateOrder: ()=>{},
    removeOrder: ()=>{},
    setCurrentOrder: ()=>{},
    getCurrentOrder: ()=>{},
    updateCurrentOrder: ()=>{},
    removeCurrentOrder: ()=>{}
});

export default OrdersContext;

export class OrdersProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentOrder: {},
            orders: {}
        };
    };

    getOrders = (order)=>{

    }

    // adds an order to state
    addOrder = (order)=>{
        this.updateOrder(order);
    }

    // updates an order
    updateOrder = (order)=>{
        let orders = this.state.orders;
        
        orders[order.id] = order

        this.setState({
            orders
        });
    }

    // removes an order
    removeOrder = (order)=>{
        let orders = this.state.orders;

        delete orders[order.id];

        this.setState({
            orders
        });
    }

    // retrieves current order
    getCurrentOrder = ()=>{
        return this.state.currentOrder;
    }

    // sets current order
    setCurrentOrder = (order)=>{
        console.log("Clicked")
        this.updateCurrentOrder(order);
    }

    // updates current order
    updateCurrentOrder = (order)=>{
        this.setState({
            currentOrder: order
        });
    }

    // sets current order to default
    removeCurrentOrder = ()=>{
        this.setState({
            currentOrder: {}
        });
    }

    render(){
        const value = {
            currentOrder: this.state.currentOrder,
            orders: this.state.orders,
            getOrders: this.getOrders,
            addOrder: this.addOrder,
            updateOrder: this.updateOrder,
            removeOrder: this.removeOrder,
            setCurrentOrder: this.setCurrentOrder,
            getCurrentOrder: this.getCurrentOrder,
            updateCurrentOrder: this.updateCurrentOrder,
            removeCurrentOrder: this.removeCurrentOrder
        };

        console.log(value)

        return (
            <OrdersContext.Provider value={value}>
                {this.props.children}
            </OrdersContext.Provider>
        );
    };
};