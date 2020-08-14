import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'


import './App.css';

const ContainerGeral = styled.div`
display: flex;
justify-content: center;

`

const ContainerWhats = styled.div`
height: 100vh;
width: 35vw;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const ContainerInput = styled.div`
display: flex;

`

const InputStyle = styled.input`
width: 15vw;
display: flex;
`

class App extends React.Component {

state = {
  mensagem: [{
    nome: "",
    conteudo: ""
  }],
  valorInputNome: "",
  valorInputConteudo: ""
}


onChangeUsuario = (event) => {
this.setState({
  valorInputNome: event.target.value
})


} 

onChangeMensagem = (event) => {
  this.setState({
    valorInputConteudo: event.target.value
  })

}

mandarMensagem = () => {

  const novaMensagem = {
    nome: this.state.valorInputNome + ":",
    conteudo: this.state.valorInputConteudo
  }

  const novoArrayMsg = [...this.state.mensagem, novaMensagem]

  this.setState({
    mensagem: novoArrayMsg,
    valorInputNome: "",
    valorInputConteudo: ""
  })

}



  render() {

  const listaMensagem = this.state.mensagem.map((msg) => {

    return (
      <div>
        <p>{msg.nome} {msg.conteudo}</p>
      </div>
    )
  })


  return (
    <ContainerGeral>
      <ContainerWhats>{listaMensagem}
        <ContainerInput>
        <InputStyle 
        value={this.state.valorInputNome}
        onChange={this.onChangeUsuario}
        placeholder="Nome do Usuário"/>
        <InputStyle 
        value={this.state.valorInputConteudo}
        onChange={this.onChangeMensagem}
        placeholder="Mensagem"
        />
        <button onClick={this.mandarMensagem}>Enviar</button>
        </ContainerInput>
      </ContainerWhats>
    </ContainerGeral>
  );
  }
}

export default App;
