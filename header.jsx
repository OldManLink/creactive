import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {

    render() {
        return (
            <div className="centred">
                <font size='+3'><br/>{this.props.line1}<br/>{this.props.line2}</font>
            </div>
        )
    }

}

export default Header;