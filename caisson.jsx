import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Entry from './entry.jsx';

class Caisson extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                text1: this.props.text1,
                text2: this.props.text2,
                hide: this.props.hide
            };
        this.context = null;
        this.oldEntry = null;
        this.newEntry = null;
    }

    generate() {
        alert("Generating..."
        + JSON.stringify(this.context.value()) + ", "
        + JSON.stringify(this.oldEntry.value()) + ", "
        + JSON.stringify(this.newEntry.value()) + ", "
        + JSON.stringify(this.state.hide));
        this.setState({text2: this.context.value()});
    }

    hideShow(event) {
        this.setState({hide: event.target.checked})
    }

    render() {
        return (
            <div>
                <Header text1={this.state.text1} text2={this.state.text2}/>
                <div id="contents">
                    <Entry ref={(ref) => this.context = ref} name="Context" placeholder="Enter Context"/>
                    <Entry ref={(ref) => this.oldEntry = ref} name="Old" placeholder="Old Password" luds={true}/>
                    <Entry ref={(ref) => this.newEntry = ref} name="New" placeholder="New Password" luds={true}/>
                    <button id='but_submit' onClick={ e => this.generate(e)}>Generate</button>
                    <div className="centred">
                        <input type='checkbox' id='hide' checked={this.state.hide} onChange={e => this.hideShow(e)}/>
                        <a id='hide'> hide</a><br/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Caisson text1="Generate" text2="Passwords" hide={true}/>, document.getElementById('caisson'));
