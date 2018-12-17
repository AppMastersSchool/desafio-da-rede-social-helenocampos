import React, {Component} from 'react';
import Post from './post';
import PostForm from './postForm';
import TopMenu from './topMenu';
import Storage from './storage';
import CircularProgress from '@material-ui/core/CircularProgress';

class TimeLine extends Component {
  constructor(props){
    super(props);
    this.storage = new Storage();
    this.state = {
      posts: [],
      users: [],
      selectedUser: null,
      loading: false
    }

  }

  insertPost(post){
    this.setState({loading: true});
    this.storage.addPostAPI(post).then(newPost=>{
        const myPosts = this.state.posts;
        myPosts.unshift(newPost);
        this.setState({posts: myPosts, loading: false});
    }).catch(error=>{
      this.setState({loading:false});
    });
  }

  componentDidMount(){ // é chamado toda vez que o componente é 'montado'
    console.log('App did mount');
    this.storage.getUsersAPI().then(users=>
      this.setState({users: users, selectedUser: users[0]})
    );
    this.storage.getPostsFromAPI().then(posts=>
      this.setState({posts: posts})
    );
  }

  onNavigate(post){
    this.props.history.push('/post/'+post.id)
  }

  getSelectedUser(id){
    return(
      this.state.users.filter(user=> user.id===parseInt(id))[0]
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
              this.state.users.map((user) => {
                return (
                  <option key={user.id} value={user.id}>{user.name}</option>
                )
              }

              )
            }
          </select>
          {
            this.state.loading?
            <center>
              <CircularProgress />
            </center>
            :
            <PostForm
              user={this.state.selectedUser}
              onCreate={this.insertPost.bind(this)}
            />
          }

        {
          this.state.posts.length>0?
            this.state.posts.map((post,i) => {
              return  (
                      <Post
                        onNavigate = {() => this.onNavigate(post)}
                        history = {this.props.history}
                        key = {post.id}
                        post={post}
                      />
              )
            }):
          <center>
            <CircularProgress />
          </center>

          }
        </div>
    )
  }
}

export default TimeLine;
