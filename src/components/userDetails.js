import React, { Component } from "react";
import User from './user';
import Post from './post';
import TopMenu from './topMenu';
import Storage from './storage';

class UserDetails extends Component {

  constructor(){
    super();
    this.storage = new Storage();
    this.state = {
      user: null,
      userPosts: null
    }
  }

  componentDidMount(){
    const users = this.storage.getUsers();
    const user = users.filter(savedUser => {
      return savedUser.id === parseInt(this.props.match.params.id);
    }).pop();
    this.setState({user});
    this.setState({userPosts:this.storage.getPostsByUser(user)});
  }

  render(){
    if(this.state.user===null){
      return (
        <div>Loading</div>
      )
    }else{

      return(
          <div>
            <TopMenu history={this.props.history}/>
            <User user={this.state.user}/>
            <hr/>
            <center><h3>Posts</h3></center>
            {
              this.state.userPosts.map((post,i) => {
                return  (
                        <Post
                          onNavigate = {() => {}}
                          history = {this.props.history}
                          key = {post.time}
                          post={post}
                        />
                )
              })
            }
          </div>


      )
    }

  }
}

export default UserDetails;
