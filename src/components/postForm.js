import React, { Component } from "react";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  createPost() {
    const newPost = {
      content: this.state.text,
      author: this.props.user.name,
      authorId: this.props.user.id,
      authorPic: this.props.user.profilePic,
      time: new Date(),
      initialLikes: 0
    };
    this.props.onCreate(newPost);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <h3>Novo post</h3>
        <input
          onKeyPress={event => {
              if(event.key === "Enter"){
                this.createPost();
              }
          }}
          onChange={event => {
            const value = event.target.value;
            this.setState({ text: value });
          }}
          value={this.state.text}
          placeholder="Digite o texto da sua postagem"
          style={{
            width: "80%",
            padding: "10px",
            margin: "10px"
          }}
        />
        <button
          onClick={() => this.createPost()}
          style={{
            width: "12%",
            backgroundColor: "blue",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            border: "none",
            borderRadius: 10,
            padding: 5
          }}
        >
          Postar
        </button>
      </div>
    );
  }
}

export default PostForm;
