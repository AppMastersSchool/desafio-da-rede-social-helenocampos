class Storage{
  getPosts(){
    console.log('getPosts from Storage class called');
    return this.getFromLocalStorage('savedPosts');
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

  setPosts(posts){
    console.log('setPosts from Storage class called');
    localStorage.setItem('savedPosts', JSON.stringify(posts));
  }

  getUsers(){
    console.log('getUsers from Storage class called');
    return this.getFromLocalStorage('users');
  }

  setUsers(users){
    console.log('setUsers from Storage class called');
    localStorage.setItem('users', JSON.stringify(users));
  }
}

export default Storage;
