import React, { Component } from "react";
import TopMenu from './topMenu';

class About extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <TopMenu history={this.props.history}/>
        <h1> Sobre a rede social </h1>
        <p>Esse é um projeto desenvolvido em React, visando o aprendizado.
        Foi proposto como atividade do curso React para humanos,
        ministrado pela App Masters em parceria com a UFJF.</p>
        <p>Desenvolvido por Heleno Campos.</p>
      </div>
    )
  }
}

export default About;
