import React, {Component} from 'react';
import "../post.css";


class Post extends Component{

  constructor(props){
    super(props);
    this.post = props.post;
    this.state  = {
      likes: this.post.initialLikes
    }
    this.doLike = this.doLike.bind(this);
  }

  doLike(){
    this.setState({likes: this.state.likes +1}, () =>{
      this.saveLikesInStorage();
    })
  }

  saveLikesInStorage(){
    const posts = JSON.parse(localStorage.getItem('savedPosts'));
    const updatePosts = posts.map(savedPost => {
      if(savedPost.time === this.post.time){
        savedPost.initialLikes = this.state.likes;
      }
      return savedPost;
    });
    localStorage.setItem('savedPosts',JSON.stringify(updatePosts));
    console.table(updatePosts);
  }

  render(){

    //console.log(this.post);
    return(
      <div className={"post"}>
        <h3
        onClick={()=>this.props.onNavigate()}
        >{this.post.content}</h3>
        <small>{this.post.author}</small>
        <br/>
        <small>{this.post.time}</small>
        <div style={likeLine}>
          <p> Likes: {this.state.likes} </p>
          <button
            onClick={this.doLike}
            style={{
              'fontSize': 20,
              'fontWeight': 'bold',
              'border': 'none',
              'borderRadius': 10,
              'padding': 5
            }}
          >
            <img width='35px' height='35px' src='https://www.freeiconspng.com/uploads/like-button-png-2.png' alt=''/>
          </button>
      </div>
      </div>
    )
  }
}

const likeLine={
  'display': 'flex',
  'justifyContent': 'space-around'
}

export default Post;
