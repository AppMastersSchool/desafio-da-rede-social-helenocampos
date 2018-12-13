import React, {Component} from 'react';
import Post from './post';
import PostForm from './postForm';

const postsArray = []

class TimeLine extends Component {
  constructor(){
    super();
    this.state = {
      posts: postsArray
    }
  }

  insertPost(post){
    const myPosts = this.state.posts;
    myPosts.unshift(post);
    this.setState({posts: myPosts});
    this.saveInStorage();
  }

  saveInStorage(){
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem('savedPosts', posts);
  }

  readFromStorage(){
    const savedPosts = localStorage.getItem('savedPosts');
    if(savedPosts){
      this.setState({posts: JSON.parse(savedPosts)})
    }
  }

  componentDidMount(){ // é chamado toda vez que o componente é 'montado'
    console.log('App did mount');
    this.readFromStorage();
  }

  onNavigate(post){
    this.props.history.push('/post/'+post.time)
  }

  render(){
    console.log('rendering App');
    return(

        <div>
          <center><h1> Minha rede social </h1></center>
          <button onClick={()=>this.props.history.push('/sobre')}>Ver sobre</button>
          <PostForm onCreate={this.insertPost.bind(this)}/>
          {
            this.state.posts.map((post,i) => {
              return  (
                      <Post 
                        onNavigate = {() => this.onNavigate(post)}
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

export default TimeLine;
