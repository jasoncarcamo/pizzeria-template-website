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
            itemIngredients: {},
            error: ""
        };
    };

    componentDidMount(){
        this.fetchItemIngredients();
    }

    fetchItemIngredients = ()=>{
        fetch("http://localhost:8000/api/item_ingredients", {
            'content-type': "application/json",
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                resData.itemIngredients.forEach((data, index)=>{
                    this.addItemIngredient(data);
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
    }

    // gets all ingredients
    getItemIngredients = ()=>{
        return this.state.itemIngredients;
    }

    // adds item ingredient
    addItemIngredient = (itemIngredient)=>{
        this.updateItemIngredient(itemIngredient);
    }

    // updates an ingredient
    updateItemIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        if(itemIngredients[itemIngredient.category] === undefined){
            itemIngredients[itemIngredient.category] = {};
        };

        if(itemIngredients[itemIngredient.category][itemIngredient.id]){
            itemIngredients[itemIngredient.category][itemIngredient.id] = {};
        };

        itemIngredients[itemIngredient.category][itemIngredient.id] = itemIngredient;

        this.setState({
            itemIngredients
        });
    }

    // removes an item ingredient
    removeItemIngredient = (itemIngredient)=>{
        const itemIngredients = this.state.itemIngredients;

        if(itemIngredients[itemIngredient.category] === undefined){
            itemIngredients[itemIngredient.category] = {};
        };

        if(itemIngredients[itemIngredient.category][itemIngredient.id]){
            itemIngredients[itemIngredient.category][itemIngredient.id] = {};
        };

        delete itemIngredients[itemIngredient.category][itemIngredient.id];

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

        console.log(value);
        
        return (
            <ItemIngredientsContext.Provider value={value}>
                {this.props.children}
            </ItemIngredientsContext.Provider>
        );
    };
};