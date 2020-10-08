import React from "react";

const UserContext = React.createContext({

});

export class UserProvider extends React.Component{
    render(){
        const value = {

        };
        
        return (
            <UserContext.Provider value={value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}