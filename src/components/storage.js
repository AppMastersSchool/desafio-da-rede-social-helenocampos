import axios from 'axios';

class Storage{
  getPostsFromAPI(){ //TODO:
    console.log('getPosts from API  called');
    return axios.get('http://localhost:3001/posts?_sort=time&_order=desc').then(response=>
      response.data
    );
  }

  getPostFromAPI(id){
    console.log('getPost from API  called');
    return axios.get('http://localhost:3001/posts/'+id).then(response=>
      response.data
    );
  }

  incrementPostLike(post){
    const editedPost = post;
    editedPost.initialLikes +=1;
    console.log('incrementPostLike from API  called');
    return axios.put('http://localhost:3001/posts/'+editedPost.id, editedPost).then(editedPost=>
      editedPost.data
    );
  }

  getFromLocalStorage(key){ //TODO: make private
    var collection = JSON.parse(localStorage.getItem(key));
    if(collection== null){
      collection = [];
    }
    return collection;
  }

  getPostsByUser(user){
    console.log('getPostsByUser from Storage class called for user '+user.name);
    const posts = this.getPosts();
    return(
      posts.filter(post=>
      post.authorId === parseInt(user.id))
    )
  }

  getPostsFromUserAPI(user){
    console.log('getPostsFromUserAPI from API  called');
    return axios.get('http://localhost:3001/posts?authorId='+user.id).then(response=>
      response.data
    );
  }

  setPosts(posts){
    console.log('setPosts from Storage class called');
    localStorage.setItem('savedPosts', JSON.stringify(posts));
  }

  addPostAPI(post){
    console.log('addPost from API  called');
    return axios.post('http://localhost:3001/posts', post).then(newPost=>
      newPost.data
    );
  }

  getUsers(){
    console.log('getUsers from Storage class called');
    return this.getFromLocalStorage('users');
  }

  getUsersAPI(){
    console.log('getUsersAPI from API  called');
    return axios.get('http://localhost:3001/users').then(response=>
      response.data
    );
  }

  getUserAPI(id){
    console.log('getUserAPI from API  called');
    return axios.get('http://localhost:3001/users/'+id).then(response=>
      response.data
    );
  }

  setUsers(users){
    console.log('setUsers from Storage class called');
    localStorage.setItem('users', JSON.stringify(users));
  }

  addUserAPI(user){
    console.log('addUserAPI from API  called');
    return axios.post('http://localhost:3001/users', user).then(newUser=>
      newUser.data
    );
  }
}

export default Storage;
