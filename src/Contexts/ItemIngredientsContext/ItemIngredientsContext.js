import React from "react";

const ItemIngredientsContext = React.createContext({
    itemIngredients: {},
    getItemIngredients: ()=>{},
    addIngredient: ()=>{},
    updateIngredient: ()=>{},
    removeIngredient: ()=>{}
});

export default ItemIngredientsContext;

export class ItemIngredientsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemIngredients: {}
        };
    };

    // gets all ingredients
    getItemIngredients = ()=>{
        return this.state.itemIngredients;
    }

    // adds item ingredient
    addItemIngredient = (itemIngredient)=>{
        this.updateIngredient(itemIngredient);
    }

    // updates an ingredient
    updateItemIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        itemIngredients[itemIngredient.id] = itemIngredient;

        this.setState({
            itemIngredients
        });
    }

    // removes an item ingredient
    removeItemIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        delete itemIngredients[itemIngredient.id];

        this.setState({
            itemIngredients
        });
    }

    render(){
        const value = {
            itemIngredients: this.state.itemIngredients,
            getItemIngredients: this.getItemIngredients,
            addItemIngredient: this.addItemIngredient,
            updateItemIngredient: this.updateItemIngredient,
            removeItemIngredient: this.removeItemIngredient
        };
        
        return (
            <ItemIngredientsContext.Provider value={value}>
                {this.props.children}
            </ItemIngredientsContext.Provider>
        );
    };
};