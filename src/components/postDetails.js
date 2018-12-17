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
    this.storage.getPostFromAPI(this.props.match.params.id).then(post =>
        this.setState({post})
    );
  }

  render(){
    return(
      this.state.post==null?
        <div>Loading</div>
      :
        <div>
          <TopMenu history={this.props.history}/>
          <Post
            history = {this.props.history}
            post={this.state.post}
            onNavigate={()=>{}}
          />
        </div>
    )
  }
}

export default PostDetails;
