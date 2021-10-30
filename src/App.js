import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Button';

const BUTTONS = [
    {name: "/", v:10},
    {name: "+", v:11},
    {name: "-", v:12},
    {name: "*", v:13},
    {name: "^", v:14},
    {name: "", v:15}
    ]
const NUMBERS123 = [

    {name: "1", v:1},
    {name: "2", v:2},
    {name: "3", v:3}
    ]
const NUMBERS456 = [
    {name: "4", v:4},
    {name: "5", v:5},
    {name: "6", v:6}
    ]
const NUMBERS789 = [
    {name: "7", v:7},
    {name: "8", v:8},
    {name: "9", v:9}
    ]
const NUMBERSZCE = [
    {name: "0", v:0},
    {name: "clear", v:16},
    {name: "=", v:17}
]

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currval1: "",
            currval2: "",
            curract: 15,
            res: ""
        };
    }


    handleClick = e => {
        const value = e.target.getAttribute('val');
        const type = e.target.getAttribute('name');

        switch (parseInt(value)) {
            case 16:
                this.setState({currval1: "", currval2: "", curract: 15, res: ""});
                break;
            case 17:
                switch (parseInt(this.state.curract)) {
                    case 10:
                        this.setState({currval1: this.state.currval1 / this.state.currval2});
                        break;
                    case 11:
                        this.setState({currval1: this.state.currval1 + this.state.currval2});
                        break;
                    case 12:
                        this.setState({currval1: this.state.currval1 - this.state.currval2});
                        break;
                    case 13:
                        this.setState({currval1: this.state.currval1 * this.state.currval2});
                        break;
                    case 14:
                        this.setState({currval1: Math.pow(this.state.currval1, this.state.currval2)});
                        break;
                    default:
                        this.setState({currval2: "ERROR"})

                }
                this.setState({currval2: "", curract: 15})
                break;
            default:
                if (parseInt(value) > 9) {
                    this.setState({curract: value});
                    break;
                }
                if (this.state.curract === 15) {
                    this.setState({currval1: parseInt(this.state.currval1.toString() + value)});
                } else {
                    this.setState({currval2: parseInt(this.state.currval2.toString() + value)});
                }
        }
    }



render() {
    return(

        <header className="App-header">
            <div className="title">
                <h1>Calc</h1>
            <h3>..and here we go again</h3>
            </div>
            <div  className="container">
                <div className="input"><input value={this.state.currval1 + " " + BUTTONS.at(this.state.curract - 10).name + " " + this.state.currval2}
                    /* {onChange={this.handleChange}}*//>
                </div>
                <div className="keypad">
            <div className="buttons1">
                <div>
                {NUMBERS123.map((but, index) => (
                    <span className="digits"><Button value = {but.v} name = {but.name} onClick ={this.handleClick}/></span>
                ))}
            </div>
            <div>
                {NUMBERS456.map((but, index) => (
                    <span className="digits"><Button value = {but.v} name = {but.name} onClick ={this.handleClick}/></span>
                ))}
            </div>
            <div>
                {NUMBERS789.map((but, index) => (
                    <span className="digits"><Button value = {but.v} name = {but.name} onClick ={this.handleClick}/></span>
                ))}
            </div>
            <div>
                {NUMBERSZCE.map((but, index) => (
                    <span className="digits"> <Button value = {but.v} name = {but.name} onClick ={this.handleClick}/></span>
                ))}
            </div>
                </div>
        <div className="buttons2">

            {BUTTONS.map((but, index) => (
                but.name !== ""? <div className="actions"><Button value = {but.v} name = {but.name} onClick ={this.handleClick}/></div> : ""
            ))}
        </div>
                </div>
        </div>
        </header>
    );
}
}

export default App;
