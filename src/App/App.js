import React from 'react';
import './App.css';
import AppContext from "../Contexts/AppContext/AppContext";
import {Route} from "react-router-dom";

import Header from "../Components/Header/Header";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import Menu from "../Components/Menu/Menu";

class App extends React.Component {

    static contextType = AppContext;

    render(){
        return (
            <>
                <Header/>
                <main>
                    <Route exact path="/login" component={LogIn}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                    <Route path="/menu" component={Menu}></Route>
                </main>
                
            </>
        );
    };
};

export default App;
