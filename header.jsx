import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {

    render() {
        return (
            <div className="centred">
                <font size='+3'><br/>{this.props.text1}<br/>{this.props.text2}</font>
            </div>
        )
    }

}

export default Header;