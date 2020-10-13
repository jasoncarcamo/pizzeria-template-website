import React from "react";

const OrderItemsContext = React.createContext({
    orderItems: ()=>{},
    addOrderItem: ()=>{},
    updateOrderItem: ()=>{},
    removeOrderItem: ()=>{}
});

export default OrderItemsContext;

export class OrderItemsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderItems: {}
        };
    };

    getOrderItems = ()=>{

    };

    // sets or adds to order items
    addOrderItem = (orderItem)=>{
        this.updateOrderItem(orderItem);
    }

    // Updates a order item
    updateOrderItem = (orderItem)=>{
        const orderItems = this.state.orderItems;

        if(orderItems[orderItem.order_id]=== undefined){
            orderItems[orderItem.order_id] = {};
        };

        if(orderItems[orderItem.order_id][orderItem.id] === undefined){
            orderItems[orderItem.order_id][orderItem.id] = {};
        };

        orderItems[orderItem.order_id][orderItem.id] = orderItem;

        this.setState({
            orderItems
        });
    }

    // Removes an order item
    removeOrderItem = (orderItem)=>{
        const orderItems = this.state.orderItems;

        if(orderItems[orderItem.order_id]=== undefined){
            orderItems[orderItem.order_id] = {};
        };

        if(orderItems[orderItem.order_id][orderItem.id] === undefined){
            orderItems[orderItem.order_id][orderItem.id] = {};
        };

        delete orderItems[orderItem.order_id][orderItem.id];

        this.setState({
            orderItems
        });
    }

    render(){
        const value = {
            orderItems: this.state.orderItems,
            addOrderItem: this.addOrderItem,
            updateOrderItem: this.updateOrderItem,
            removeOrderItem: this.removeOrderItem
        };

        return (
            <OrderItemsContext.Provider value={value}>
                {this.props.children}
            </OrderItemsContext.Provider>
        )
    }
}