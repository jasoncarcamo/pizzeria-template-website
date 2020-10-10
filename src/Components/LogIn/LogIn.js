import React from "react";
import LogInForm from "./LogInForm/LogInForm";

export default class LogIn extends React.Component{
    render(){
        return (
            <section id="login-section">
                <LogInForm/>
            </section>
        );
    };
};