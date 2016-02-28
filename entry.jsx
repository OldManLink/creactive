import React from 'react';
import ReactDOM from 'react-dom';
import Luds from './luds.jsx';
import Length from './length.jsx';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value,
            hide: this.props.hide,
            selected: this.props.selected
        };
    }

    update(event) {
        this.setState({value: event.target.value});
    }

    hide(hide) {
        this.setState({hide: hide});
    }

    value() {
        return this.state.value
    }

    length() {
        return this.state.length.state.choice
    }

    luds() {
        return this.state.luds.state
    }

    render() {
        return <div>
            {this.props.name}:
            <input type={this.state.hide ? 'password' : 'text'} size={50}
                   placeholder={this.props.placeholder}
                   value={this.state.value}
                   onChange={ ev => this.update(ev)}/>
            {this.props.extended ? <Luds ref={(ref) => this.state.luds = ref} /> : ""}
            {this.props.extended ? <Length ref={(ref) => this.state.length = ref} length={this.state.selected}/> : ""}
            {this.props.extended ? <br/> : ""}
        </div>
    }

}

Entry.propTypes = {placeholder: React.PropTypes.string, value: React.PropTypes.string, hide: React.PropTypes.bool, extended: React.PropTypes.bool };
Entry.defaultProps = {placeholder: "Enter value", hide: false, extended: false, selected: 12};

export default Entry;