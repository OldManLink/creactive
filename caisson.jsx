import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Entry from './entry.jsx';

class Caisson extends React.Component {

    render() {
        return (
            <div>
                <Header text1={this.props.text1} text2={this.props.text2}/>
                <div id="contents">
                    <Entry name="Context" placeholder="Enter Context"/>
                    <Entry name="Old" placeholder="Old Password" luds={true}/>
                    <Entry name="New" placeholder="New Password" luds={true}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Caisson text1="Generate" text2="Passwords"/>, document.getElementById('caisson'));
