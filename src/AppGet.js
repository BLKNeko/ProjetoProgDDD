import React, { Component } from 'react';
import requisicao from './Api'
import mascoteIcon from './assets/mascote-icon.png';
import logo from './assets/img.svg';
import { Link } from 'react-router-dom';

import './style/appGet.css';


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
            <>
            <div class="top-bar">
                    <Link  to="/">Home</Link>
                    <Link to="/get">Recompensas</Link>
                    <Link to="/post">Adicionar Recompensas</Link>
            </div>
            
            <div className="container">
                
                  
                        <h1>Recompensas</h1>
            
            </div>     
              
            
                <div className="container-body">
                    <div class="lista-recompensas">   

                    {dados.map(recompensa => (
                         <div className="card-content">
                        <h3>{recompensa.Nome}</h3>
                                <img  src={logo} alt="Card image cap" />
                          <div className="card-body">
                    <div className="id-content">ID: {recompensa.Id}</div>       
                    <div className="container-resgate">{recompensa.Resgate}</div>
                    <div><p>{recompensa.Descricao}</p></div>
                         </div>
                        </div>
                    )
                    )
                    }         
                    </div>

                    

                    <div className="container-img">
                            <img src={mascoteIcon} alt=""/>
                    </div>    
                </div>
            </>
            );
            
    }

}
 {/* {console.log(dados)}
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
                    </div> */}