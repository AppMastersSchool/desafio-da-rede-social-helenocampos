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

    return(
      <div className={"post"}>
        <div className={'post-leftContainer'}>
          <div className={'post-profilePic'}>
              <img
                onClick={()=>this.props.history.push('/user/'+this.post.authorId)}
                alt=''
                src={this.post.authorPic}/>
          </div>
          <div className={'post-profileName'}>
            {this.post.author}
          </div>
        </div>
        <div className={'post-rightContainer'}>
          <h3
          onClick={()=>this.props.onNavigate()}
          >{this.post.content}</h3>



          <div className={'post-info'}>
            <div className={'post-info-time'}>
              {this.post.time}
            </div>

              <div className={'post-info-likes'}>

                <span> Likes: {this.state.likes}
                <button
                  onClick={this.doLike}
                  style={{
                    'border': 'none',
                  }}>
                  <img width='35px' height='35px' src='https://www.freeiconspng.com/uploads/like-button-png-2.png' alt=''/>
                </button>
                 </span>
              </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Post;
