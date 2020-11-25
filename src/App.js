import React, { Component } from 'react';
 import './style/landing.css'
import requisicao from './Api'
import { Link } from 'react-router-dom';

import landingImg from './assets/Party.png'




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
        return (
            <div>
                <div class="top-bar">
                    <Link  to="/">Home</Link>
                    <Link to="/get">Recompensas</Link>
                    <Link to="/post">Adicionar Recompensas</Link>
                </div>

                <div className="image-container">
                    <h1>Participando pra
                         VALER</h1>
                    <img src={landingImg} alt="landing image"/>
                </div>

                    
                <footer>
                    <span id="span-gameficacao">GAMIFICAÇÃO</span>
                    <span>Aqui a participação é pra valer</span>

                    <p>@AUGUSTO RODRIGUES//DANILO MAIA//JOÃO PEDRO CARDOSO//RUDINEI COSTA</p>   
                </footer>
               
            </div>
            );
            
    }

}



