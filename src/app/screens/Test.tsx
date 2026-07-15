//@ts-nocheck
import React, { Component } from "react";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "BMW",
            model: "m8",
            color: "Black",
            year: 2024
        };
    }
    changeDetails = () => {
        this.setState({ brand: "PORSCHE", model: "911 GTS", color: "Silver Metallic", year: "2025" });
    }

    componentDidMount() {
        console.log("componentDidMount")
    }
    //runs after first runder => retrive data from backend server

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    //runs before component unmount


    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    Color: {this.state.color} |
                    Model: {this.state.model} |
                    Year: {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeDetails}
                >Change Details</button>
            </div>
        );
    }
}

export default Test;