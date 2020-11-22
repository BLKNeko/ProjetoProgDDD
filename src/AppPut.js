import React, { Component } from 'react';
import './custom.css'
import requisicao from './Api'


class AppPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
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
        requisicao.put("api/recompensas/alterar", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {id, nome, resgate, descricao, icone} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="id" value={id} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="nome" value={nome} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="descricao" value={descricao} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="icone" value={icone} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="date" name="resgate" value={resgate} onChange={this.changeHandler} />
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default AppPost
