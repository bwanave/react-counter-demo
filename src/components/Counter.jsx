import React from 'react';
import CounterButton from './CounterButton';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.performOperation = this.performOperation.bind(this);
    }

    performOperation(value) {
        if (value.startsWith("-")) {
            // Remove - char
            value = value.substring(1, value.length)
            this.setState({ counter: parseInt(this.state.counter) - parseInt(value) })
        }
        else {
            if (value.startsWith("+")) {
                // Remove + char
                value = value.substring(1, value.length)
            }
            this.setState({ counter: parseInt(this.state.counter) + parseInt(value) })
        }
    }

    render() {

        return (
            <div>
                <h1>The Counter Application</h1>
                <br />
                <CounterButton value='+100' performOperation={this.performOperation} />
                <CounterButton value='-100' performOperation={this.performOperation} />
                <br />
                <CounterButton value='+50' performOperation={this.performOperation} />
                <CounterButton value='-50' performOperation={this.performOperation} />
                <br />
                <CounterButton value='+10' performOperation={this.performOperation} />
                <CounterButton value='-10' performOperation={this.performOperation} />
                <br />
                <CounterButton value='+5' performOperation={this.performOperation} />
                <CounterButton value='-5' performOperation={this.performOperation} />
                <br />
                <CounterButton performOperation={this.performOperation} />
                <CounterButton value='-1' performOperation={this.performOperation} />
                <br />
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default Counter;