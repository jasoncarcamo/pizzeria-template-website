import React from "react";

export default class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    };

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    renderLabelName = (name)=>{
        let newName = name.split("");
        let upperCaseChar = newName[0].toUpperCase();

        newName[0] = upperCaseChar;

        newName = newName.join("");

        return newName;
    };

    renderPlaceHolder = (placeholder)=>{
        return placeholder.split("_").join(" ");
    }

    renderInputs = ()=>{
        let inputs;

        inputs = Object.keys(this.state).map((name, index)=>{
            if(name !== "error"){
                return (
                    <div key={index}>
                        <label htmlFor={`login_${name}`}>{this.renderLabelName(name)}</label>
                        <input id={`login_${name}`} name={name} value={this.state[name]} onChange={this.handleInput} placeholder={this.renderPlaceHolder(name)}/>
                    </div>
                );
            };
        });

        return inputs;
    };

    handleLogIn = (e)=>{
        e.preventDefault();

        fetch("https://localhost:8000/api/login", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
            .then( resData => {
                console.log(resData);
            })
            .catch( err => {
                this.setState({
                    error: err.error
                });
            });
    }

    render(){
        return (
            <form onSubmit={this.handleLogIn}>
                <fieldset>
                    <legend></legend>

                    {this.renderInputs()}                    

                    <button tyoe="submit">Log In</button>
                </fieldset>
            </form>
        );
    };
};