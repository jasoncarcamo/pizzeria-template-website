import React from "react";
import AppContext from "../../../Contexts/AppContext/AppContext";

export default class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentMenuItem: {}
        };
    };

    static contextType = AppContext;

    componentDidMount(){

        if(!Object.keys(this.props.menuItemsContext.currentMenuItem).length){
            let pathName = this.props.history.location.pathname.split("/");

            pathName.pop();

            pathName = pathName.join("/");

            return this.props.history.push(pathName);
            
        };

        this.setState({
            currentMenuItem: this.props.menuItemsContext.currentMenuItem
        });
    };

    componentWillUnmount(){
        this.setState({
            currentMenuItem: {}
        });
    }

    render(){
        console.log(this.state);
        return(
            <section className="menu-item-container">
                {this.state.currentMenuItem.ingredients}
            </section>
        );
    };
};