import React, { Component } from "react";

class TopMenu extends Component {
  render(){
    console.log(this.props);
    return(
      <div style={{
        display: 'block',
        width:'100%'
      }}>
        <button
        style={buttonStyle}
        onClick={()=>this.props.history.push('/')}
        >Timeline</button>
        <button
        onClick={()=>this.props.history.push('/sobre')}
        style={buttonStyle}
        >Sobre</button>
      </div>
    )
  }
}

const buttonStyle = {
  'width': '50%',
  'height':'50px'

}

export default TopMenu;
