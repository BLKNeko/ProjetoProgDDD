import axios from 'axios'

const requisicao = axios.create({
    baseURL: 'https://localhost:44341/'
});


export default requisicao;