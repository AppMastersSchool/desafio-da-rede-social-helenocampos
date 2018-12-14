import React, { Component } from "react";
import Post from './post';
import TopMenu from './topMenu';
import Storage from './storage';

class PostDetails extends Component {

  constructor(){
    super();
    this.storage = new Storage();
    this.state = {
      post: null
    }
  }

  componentDidMount(){
    const posts = this.storage.getPosts();
    const post = posts.filter(savedPost => {
      return savedPost.time === this.props.match.params.time;
    }).pop();
    this.setState({post});
  }

  render(){
    if(this.state.post===null){
      return (
        <div>Loading</div>
      )
    }else{
      return(
          <div>
          <TopMenu history={this.props.history}/>
          <Post
            post={this.state.post}
            onNavigate={()=>{}}
          />
          </div>
      )
    }

  }
}

export default PostDetails;
