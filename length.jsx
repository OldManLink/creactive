import React from 'react';
import ReactDOM from 'react-dom';


class Length extends React.Component {

    constructor(props) {
        super(props);
        this.state = {choice: this.props.choice};
    }

    update(event) {
        this.setState({choice: parseInt(event.target.value)})
    }

    value() {
        return this.state.choice
    }

    render() {
        return (
            <div>
                Length: <select name='length' defaultValue={this.state.choice} onChange={ ev => this.update(ev)}>
                    {this.props.choices.map(function(choice){
                            return <option key={choice} value={choice}>{choice}</option>;
                        })
                    }
                </select>
            </div>
        )
    }

}
Length.propTypes = {choice: React.PropTypes.number};
Length.defaultProps = {choice: 12, choices: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]};

export default Length;