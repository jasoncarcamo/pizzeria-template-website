import React from "react";

export default class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            address: "",
            suite: "",
            city: "",
            state: "",
            zip_code: "",
            mobile_number: "",
            email: "",
            password: "",
            confirm_password: "",
            error: ""
        };
    };

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    renderLabelName = (name)=>{
        let newName = name.split("_");
        let secondSplit = newName[0].split("");
        let upperCaseChar = newName[0].split("")[0].toUpperCase();

        secondSplit[0] = upperCaseChar;

        secondSplit = secondSplit.join("");

        if(!!newName[1]){
            secondSplit = secondSplit + " " + newName[1];
        };

        return secondSplit;
    }

    renderPlaceHolder = (placeholder)=>{
        return placeholder.split("_").join(" ");
    }

    renderInputs = ()=>{
        let inputs;

        inputs = Object.keys(this.state).map((name, i)=>{

            if(name !== "error"){
                return (
                    <div key={i}>
                        <label htmlFor={`signup_${name}`} key={i}>{this.renderLabelName(name)}</label>
                        <input id={`signup_${name}`} name={name} value={this.state[name]} onChange={this.handleInput} placeholder={this.renderPlaceHolder(name)}/>
                    </div>
                );
            };
        });

        return inputs;
    }

    handleSignUp = (e)=>{
        e.preventDefault();

        const {
            first_name,
            last_name,
            address,
            suite,
            city,
            state,
            zip_code,
            mobile_number,
            email,
            password
        } = this.state;

        const newUser = {
            first_name,
            last_name,
            address,
            suite,
            city,
            state,
            zip_code,
            mobile_number,
            email,
            password
        };

        for(const [key, value] of Object.entries(newUser)){
            if(key !== "suite"){
                if(value === ""){
                    const input = document.getElementById(`signup_${key}`);

                    input.style.border = "1px solid red";

                    this.setState({
                        error: "Missing requirement(s)"
                    });

                    return;

                };
            };
        };

        fetch("https://localhost:8000/api/register", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newUser)
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
            <form onSubmit={this.handleSignUp}>
                <fieldset>
                    <legend></legend>

                    {this.renderInputs()}

                    <p>{this.state.error}</p>

                    <button type="submit">Sign Up</button>
                </fieldset>
            </form>
        )
    }
}