import React, { Component } from "react";
import User from './user';
import Post from './post';
import TopMenu from './topMenu';
import Storage from './storage';
import CircularProgress from '@material-ui/core/CircularProgress';

class UserDetails extends Component {

  constructor(){
    super();
    this.storage = new Storage();
    this.state = {
      user: null,
      userPosts: []
    }
  }

  componentDidMount(){
    this.storage.getUserAPI(this.props.match.params.id).then(user =>
      {
        this.setState({user});
        this.storage.getPostsFromUserAPI(this.state.user).then(posts =>
          this.setState({userPosts: posts})
        );
      }
    );
  }

  render(){
    if(this.state.user===null){
      return (
        <div>
          <center>
            <CircularProgress />
          </center>
        </div>
      )
    }else{

      return(
          <div>
            <TopMenu history={this.props.history}/>
            <User user={this.state.user}/>
            <hr/>
            <center><h3>Posts</h3></center>
            {
              this.state.userPosts.length>0?
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
              :
              <center>
                <CircularProgress />
              </center>
            }
          </div>


      )
    }

  }
}

export default UserDetails;
