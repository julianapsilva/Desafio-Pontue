import axios from 'axios';
import store from '../config/store'

const api = axios.create({
  baseURL:'https://desafio.pontue.com.br/',
})

api.interceptors.request.use(async(config) => {
  try{
    const token =  store.getters.token
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
            return config
  }}
  catch(err){
    alert("err")
  }
})


export default api;