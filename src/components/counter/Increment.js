import React, {Component} from 'react';

class Increment extends Component {
    render() {
        return (
            <div data-test="component-increment">
                <h1 data-test="counter-display">The counter is </h1>
                <button data-test="btn-increment">Increment</button>
            </div>
        );
    }
}

export default Increment;