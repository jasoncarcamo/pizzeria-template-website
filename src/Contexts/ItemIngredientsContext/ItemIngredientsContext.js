import React from "react";

const ItemIngredientsContext = React.createContext({
    itemIngredients: {},
    getIngredients: ()=>{},
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

    // ets all ingredients
    getIngredients = ()=>{
        return this.state.itemIngredients;
    }

    // adds item ingredient
    addIngredient = (itemIngredient)=>{
        this.updateIngredient(itemIngredient);
    }

    // updates an ingredient
    updateIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        itemIngredients[itemIngredient.id] = itemIngredient;

        this.setState({
            itemIngredients
        });
    }

    // removes an item ingredient
    removeIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        delete itemIngredients[itemIngredient.id];

        this.setState({
            itemIngredients
        });
    }

    render(){
        const value = {
            itemIngredients: this.state.itemIngredients,
            getIngredients: this.getIngredients,
            addIngredient: this.addIngredient,
            updateIngredient: this.updateIngredient,
            removeIngredient: this.removeIngredient
        };
        
        return (
            <ItemIngredientsContext.Provider value={value}>
                {this.props.children}
            </ItemIngredientsContext.Provider>
        );
    };
};