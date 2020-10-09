import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import AppContext, {AppProvider} from "./Contexts/AppContext/AppContext"
import ItemIngredientsContext, {ItemIngredientsProvider} from "./Contexts/ItemIngredientsContext/ItemIngredientsContext";
import MenuItemsContext, {MenuItemsProvider} from "./Contexts/MenuItemsContext/MenuItemsContext";
import OrderItemsContext, {OrderItemsProvider} from "./Contexts/OrderItemsContext/OrderItemsContext";
import OrdersContext, {OrdersProvider} from "./Contexts/OrdersContext/OrdersContext";
import CartContext, {CartProvider} from "./Contexts/CartContext/CartContext";
import UserContext, {UserProvider} from "./Contexts/UserContext/UserContext";

ReactDOM.render(
    <BrowserRouter>

        <MenuItemsProvider>
            <MenuItemsContext.Consumer>
                { menuItemsContext => (
                    <ItemIngredientsProvider>
                        <ItemIngredientsContext.Consumer>
                            { itemIngredientsContext => (
                                <OrdersProvider>
                                    <OrdersContext.Consumer>
                                        { ordersContext => (
                                            <OrderItemsProvider>
                                                <OrderItemsContext.Consumer>
                                                    { orderItemsContext => (
                                                        <CartProvider
                                                            ordersContext={ordersContext}>
                                                                <CartContext.Consumer>
                                                                    { cartContext => (
                                                                        <UserProvider>
                                                                            <UserContext.Consumer>
                                                                                { userContext => (
                                                                                    <AppProvider
                                                                                        userContext={userContext}
                                                                                        menuItemsContext={menuItemsContext}
                                                                                        itemIngredientsContext={itemIngredientsContext}
                                                                                        ordersContext={ordersContext}
                                                                                        orderItemsContext={orderItemsContext}
                                                                                        cartContext={cartContext}>
                                                                                            <App/>
                                                                                    </AppProvider>
                                                                                )}
                                                                            </UserContext.Consumer>
                                                                        </UserProvider>
                                                                    )}
                                                                </CartContext.Consumer>
                                                        </CartProvider>
                                                    )}
                                                </OrderItemsContext.Consumer>
                                            </OrderItemsProvider>
                                        )}
                                    </OrdersContext.Consumer>
                                </OrdersProvider>
                            )}
                        </ItemIngredientsContext.Consumer>
                    </ItemIngredientsProvider>
                )}
            </MenuItemsContext.Consumer>
        </MenuItemsProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
