import React, { Component } from 'react';
import './custom.css'
import requisicao from './Api'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from './assets/img.svg';
import { Route, Switch, Link } from 'react-router-dom';
import AppPut from './AppPut';
import AppPost from './AppPost';
import AppGet from './AppGet';




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
            <div>
                <div class="topnav">
                <a class="active" href="/">Home</a>
                <a href="/get">GET</a>
                <a href="/post">POST</a>
                <a href="#about">About</a>
                <label>PARTICIPANDO PRA VALER</label>

                
                </div>
                <hr></hr>
                <div class="lista">
                <Switch>
                    <Route path="/get" component={AppGet}/>
                    <Route path="/test" component={AppPut}/>
                    <Route path="/post" component={AppPost}/>
                </Switch>
                </div>

                <div class="botton">
                    <label>AUGUSTO RODRIGUES//DANILO MAIA//JOÃO PEDRO CARDOSO//RUDINEI COSTA</label>
                </div>

            </div>
            );
            
    }

}


