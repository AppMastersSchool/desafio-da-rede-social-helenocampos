import React, { Component } from "react";
import User from './user';
import Post from './post';
import TopMenu from './topMenu';

class UserDetails extends Component {

  constructor(){
    super();
    this.state = {
      user: null,
      userPosts: null
    }
  }

  readPostsFromStorage(user){
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts'));
    const userPosts = savedPosts.filter(post=>
    post.authorId === parseInt(user.id));
    console.log(this.props);
    if(userPosts){
      this.setState({userPosts:userPosts});
    }
  }

  componentDidMount(){
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.filter(savedUser => {
      return savedUser.id === parseInt(this.props.match.params.id);
    }).pop();
    this.setState({user});
    this.readPostsFromStorage(user);
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
