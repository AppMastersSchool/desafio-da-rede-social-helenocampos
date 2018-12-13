import React, { Component } from "react";
import Post from './post';

class PostDetails extends Component {

  constructor(){
    super();
    this.state = {
      post: null
    }
  }

  componentDidMount(){
    const posts = JSON.parse(localStorage.getItem('savedPosts'));
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