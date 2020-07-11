import React from 'react';
import './CounterButton.css';

class CounterButton extends React.Component {

    render() {
        return (
            <button className="counter-button" value={this.props.value} onClick={(e) => this.props.performOperation(e.target.value)}>
                {this.props.value}
            </button>
        )
    }
}

CounterButton.defaultProps = {
    value: 1
}

export default CounterButton;