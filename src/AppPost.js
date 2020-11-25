import React, { Component } from 'react';
import './style/appPost.css';
import requisicao from './Api'
import { Link } from 'react-router-dom';

class AppPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            resgate: '',
            icone: '',
            descricao: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        requisicao.post("api/recompensas/adicionar", this.state)
        .then(response => {
            console.log(response)
            window.location.href = "/get";
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {nome, resgate, descricao, icone} = this.state
        return(
            <div>
                <div class="top-bar">
                    <Link  to="/">Home</Link>
                    <Link to="/get">Recompensas</Link>
                    <Link to="/post">Adicionar Recompensas</Link>
            </div>
            <div id="page-form">
                <h1>Cadastre sua recompensa</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>NOME:</label>
                        <br/>
                        <input type="text" name="nome" value={nome} onChange={this.changeHandler} />
                    </div>
                    <div>
                    <label>DESCRIÇÃO:</label>
                    <br/>
                        <input type="text" name="descricao" value={descricao} onChange={this.changeHandler} />
                    </div>
                    <div>
                    <label>ICONE:</label>
                    <br/>
                        <input type="text" name="icone" value={icone} onChange={this.changeHandler} />
                    </div>
                    <div>
                    <label>DATA:</label>
                    <br/>
                        <input type="date" name="resgate" value={resgate} onChange={this.changeHandler} />
                    </div>
                    <div id="container-btn">
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}


export default AppPost
