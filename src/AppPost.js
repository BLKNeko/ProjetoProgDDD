import React, { Component } from 'react';
import './custom.css'
import requisicao from './Api'


class AppPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            resgate: '',
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
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {nome, resgate, descricao} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="nome" value={nome} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="date" name="resgate" value={resgate} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="descricao" value={descricao} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default AppPost
