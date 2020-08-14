import React from 'react'
import styled from 'styled-components'

const ContainerBalao = styled.div `
    background-color: #DDF7C8;
    border-radius: 4px;
    height: 3em;
    width: 10em;
`


class BalaoMensagem extends React.Component {

    render() {
        return (
            <ContainerBalao>
                <p><strong>{this.props.nome}</strong></p>
                <p>{this.props.conteudo}</p>
            </ContainerBalao>
        )
    }
}

export default BalaoMensagem
