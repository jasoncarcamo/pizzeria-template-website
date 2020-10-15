import React from "react";
import MenuHeader from "./MenuHeader/MenuHeader";
import AppContext from "../../Contexts/AppContext/AppContext";
import Category from "./Category/Category";
import {Route} from "react-router-dom";
import CategoryItems from "./Category/CategoryItems/CategoryItems";
import MenuItem from "./MenuItem/MenuItem";

export default class Menu extends React.Component{
    
    static contextType = AppContext;

    render(){
        
        return (
            <section id="menu-section">
                <MenuHeader menuItems={this.context.menuItemsContext.menuItems}/>
                
                <Route exact path="/menu" render={(props) => <Category {...props} menuItems={this.context.menuItemsContext.menuItems}/>}></Route>

                <Route exact path="/menu/:category">
                    <CategoryItems menuItems={this.context.menuItemsContext.menuItems} props={this.props} history={this.props.history}></CategoryItems>
                </Route>

                <Route exact path="/menu/:category/:item_name">
                    <MenuItem history={this.props.history} menuItemsContext={this.context.menuItemsContext}/>
                </Route>
            </section>
        );
    };
};