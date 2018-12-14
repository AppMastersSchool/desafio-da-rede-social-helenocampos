import React, {Component} from 'react';
import Post from './post';
import PostForm from './postForm';
import TopMenu from './topMenu';

const postsArray = []
const usersArray = [
  {
    name: 'heleno',
    id: 1,
    profilePic: 'https://i.pinimg.com/originals/02/cf/9c/02cf9c2736da1dddedf532159058445f.png'
  },
  {
    name:'elon',
    id: 2,
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/220px-Elon_Musk_2015.jpg'
  }
]

class TimeLine extends Component {
  constructor(){
    super();
    this.state = {
      posts: postsArray,
      selectedUser: usersArray[0]
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

  saveUsersInStorage(){
    console.log('saving users');
    localStorage.setItem('users', JSON.stringify(usersArray));
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
    this.saveUsersInStorage();
  }

  onNavigate(post){
    this.props.history.push('/post/'+post.time)
  }

  getSelectedUser(id){
    return(
      usersArray.filter(user=> user.id===parseInt(id))[0]
    )
  }

  render(){
    console.log('rendering App');
    return(

        <div>
          <TopMenu history={this.props.history}/>
          <center><h1> Minha rede social </h1></center>
          Usuário: <select onChange={(e) => this.setState({ selectedUser: this.getSelectedUser(e.target.value) })}>
            {
              usersArray.map((user) => {
                return (
                  <option key={user.id} value={user.id}>{user.name}</option>
                )
              }

              )
            }
          </select>
          <PostForm
            user={this.state.selectedUser}
            onCreate={this.insertPost.bind(this)}
          />
          {
            this.state.posts.map((post,i) => {
              return  (
                      <Post
                        onNavigate = {() => this.onNavigate(post)}
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

export default TimeLine;
