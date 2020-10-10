import React from 'react';
import './App.css';
import AppContext from "../Contexts/AppContext/AppContext";

class App extends React.Component {

    static contextType = AppContext;

    render(){
        return (
            <>

                <main>
                    <button onClick={()=>{ this.context.cartContext.updateCurrentOrder({id: 1, type: "Pasta"})}}>OK</button>
                </main>
                
            </>
        );
    };
};

export default App;
