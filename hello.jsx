import React from 'react';
import ReactDOM from 'react-dom';
 
class Hello extends React.Component {

  render() {
    return <font size='+1'>Hello, {this.props.name} World!</font>
  }

}

ReactDOM.render(<Hello name="Fareoffice" />, document.getElementById('hello'));
