import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <h1>Hello world</h1>
    );
    }
}

export default Main;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;