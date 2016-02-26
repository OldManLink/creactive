import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    decrementCount() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                <div className="centred">
                    <font size='+2'>Click counter: {this.state.count}</font>
                </div>
                <button type="Increment" id="but_up" onClick={ e => this.incrementCount(e)}>Increment</button>
                <button type="Decrement" id="but_down" onClick={ e => this.decrementCount(e)}>Decrement</button>
            </div>
        )
    }

}

Counter.propTypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};

ReactDOM.render(<Counter initialCount={42}/>, document.getElementById('counter'));
