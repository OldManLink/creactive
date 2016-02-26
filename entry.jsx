import React from 'react';
import ReactDOM from 'react-dom';
import Luds from './luds.jsx';

class Entry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: this.props.name, value: this.props.value, hide: this.props.hide, luds: this.props.luds};
    }

    update(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <div>
            {this.props.name}:
            <input type={this.props.hide ? 'password' : 'text'} size={50}
                   placeholder={this.props.placeholder}
                   value={this.state.value}
                   onChange={ ev => this.update(ev)}/>
            {this.props.luds ? <Luds /> : ""}
        </div>
    }

}

Entry.propTypes = {placeholder: React.PropTypes.string, value: React.PropTypes.string, hide: React.PropTypes.bool, luds: React.PropTypes.bool };
Entry.defaultProps = {placeholder: "Enter value", hide: false, luds: false};

export default Entry;