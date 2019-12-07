import React, {Component} from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0,
        }
    }

    onBtbClick=()=>{
    this.setState({
        counter: this.state.counter+1
    })
    }
    render() {
        return (
            <div data-test="component-increment">
                <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
                <button data-test="btn-increment"
                        onClick={this.onBtbClick}
                >Increment counter</button>
            </div>
        );
    }
}



export default Increment;