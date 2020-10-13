import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

export default class SignUp extends React.Component{
    render(){
        return (
            <section id="signup-section">
                <SignUpForm/>
            </section>
        );
    };
};