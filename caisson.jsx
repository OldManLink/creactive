import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Entry from './entry.jsx';

class Caisson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            line1: this.props.line1,
            line2: this.props.line2,
            hide: this.props.hide
        };
        this.context = null;
        this.oldEntry = null;
        this.newEntry = null;
    }

    generate() {
        alert("Generating..."
        + JSON.stringify(this.context.value()) + "\n"
        + JSON.stringify(this.oldEntry.value()) + JSON.stringify(this.oldEntry.luds()) + this.oldEntry.length() + "\n"
        + JSON.stringify(this.newEntry.value()) + JSON.stringify(this.newEntry.luds()) + this.newEntry.length() + "\n"
        + JSON.stringify(this.state.hide));
        this.setState({line1: "Passwords", line2: "Generated"});
    }

    hideShow(event) {
        var hide = event.target.checked;
        this.setState({hide: hide});
        this.context.hide(hide);
        this.oldEntry.hide(hide);
        this.newEntry.hide(hide);
    }

    render() {
        return (
            <div>
                <Header line1={this.state.line1} line2={this.state.line2}/>
                <div id="contents">
                    <Entry ref={(ref) => this.context = ref} name="Context" placeholder="Enter Context" hide={this.state.hide}/>
                    <Entry ref={(ref) => this.oldEntry = ref} name="Old" placeholder="Old Password" hide={this.state.hide} extended={true} />
                    <Entry ref={(ref) => this.newEntry = ref} name="New" placeholder="New Password" hide={this.state.hide} extended={true} />
                    <button id='but_submit' onClick={ e => this.generate(e)}>Generate</button>
                    <div className="centred">
                        <input type='checkbox' value='hide' checked={this.state.hide} onChange={e => this.hideShow(e)}/>
                        <a id='hide'> hide</a><br/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Caisson line1="Generate" line2="Passwords" hide={true}/>, document.getElementById('caisson'));
