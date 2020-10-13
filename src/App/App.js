import React from 'react';
import './App.css';
import AppContext from "../Contexts/AppContext/AppContext";
import {Route} from "react-router-dom";

import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";

class App extends React.Component {

    static contextType = AppContext;

    render(){
        return (
            <>

                <main>
                    <Route exact path="/login" component={LogIn}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                </main>
                
            </>
        );
    };
};

export default App;
