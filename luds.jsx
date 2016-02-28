import React from 'react';
import ReactDOM from 'react-dom';


class Luds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {l: this.props.l, u: this.props.u, d: this.props.d, s: this.props.s};
    }

    update(event) {
        var newState = {};
        newState[event.target.value] = event.target.checked;
        this.setState(newState);
    }

    render() {
        return (
            <div>
            Chars:&nbsp;
                <input type='checkbox' value='l' checked={this.state.l} onChange={ ev => this.update(ev)}/> l&nbsp;
                <input type='checkbox' value='u' checked={this.state.u} onChange={ ev => this.update(ev)}/> u&nbsp;
                <input type='checkbox' value='d' checked={this.state.d} onChange={ ev => this.update(ev)}/> d&nbsp;
                <input type='checkbox' value='s' checked={this.state.s} onChange={ ev => this.update(ev)}/> s&nbsp;
            </div>
        )
    }

}
Luds.propTypes = {l: React.PropTypes.bool, u: React.PropTypes.bool, d: React.PropTypes.bool, s: React.PropTypes.bool };
Luds.defaultProps = {l: true, u: true, d: true, s: true};

export default Luds;