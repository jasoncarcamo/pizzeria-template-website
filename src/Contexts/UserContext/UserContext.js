import React from "react";

const UserContext = React.createContext({
    user: {},
    updateUser: ()=>{},
    removeUser: ()=>{}
});

export default UserContext;

export class UserProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    };


    getUser = ()=>{
        
    }

    // updates user
    updateUser = (user)=>{
        this.setState({
            user
        });
    }

    // removes ands resets user state
    removeUser = ()=>{
        this.setState({
            user: {}
        });
    }

    render(){
        const value = {
            user: this.state.user,
            updateUser: this.updateUser,
            removeUser: this.removeUser
        };
        
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}