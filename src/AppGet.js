import React, { Component } from 'react';
import './custom.css'
import requisicao from './Api'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import logo from './assets/img.svg';



export default class App extends Component {
    

    state = {
        dados: []
    }

    //chamado imediatamente ap�s alguma atualiza��o ocorrer
        async componentDidMount() {
        const retorno = await requisicao.get("api/recompensas");
        this.setState({ dados: retorno.data });
    }

    

    render() {
        const { dados } = this.state;
        return (
            <div class="lista">
                {console.log(dados)}
                {dados.map(recompensa => (
                    <div class="lista">
                        <Card>
                        <CardImg top width="100%" src={logo} alt="Card image cap" />
                        <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">ID: {recompensa.Id}</CardSubtitle>
                            <CardTitle tag="h5">{recompensa.Nome}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{recompensa.Resgate}</CardSubtitle>
                            <CardText><p>{recompensa.Descricao}</p></CardText>
                        </CardBody>
                        </Card>
                    </div>
                    
                    )
                )}  
            </div>
            );
            
    }

}