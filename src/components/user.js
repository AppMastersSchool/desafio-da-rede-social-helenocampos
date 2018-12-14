import React, {Component} from 'react';

class User extends Component{
  constructor(props){
    super(props);
    this.user = props.user;
  }

  render(){
    return(
      <div>
      <div style={
        {
          margin: 'auto',
          width: '50%',
        }
      }>
        <img
          style={
            {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '80px',
              height: '80px'
            }
          }
          alt='' src={this.user.profilePic}/>
        <br/>
        <p style={{textAlign: 'center'}}>{this.user.name}</p>
      </div>
      </div>
    )
  }
}
export default User;
