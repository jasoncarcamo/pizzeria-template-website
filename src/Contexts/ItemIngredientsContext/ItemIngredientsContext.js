import React from "react";

const ItemIngredientsContext = React.createContext({

});

export default ItemIngredientsContext;

export class ItemIngredientsProvider extends React.Component{
    render(){
        const value = {

        };
        
        return (
            <ItemIngredientsContext.Provider value={value}>
                {this.props.children}
            </ItemIngredientsContext.Provider>
        );
    };
};