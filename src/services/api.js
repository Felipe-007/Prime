/**
 * Aqui ficarão as APIs
 * 
 * Base da URL
 * https://api.themoviedb.org/3/
 * 
 * URL da API
 * /movie/now_playing?api_key=a4267de68eb55817f90b4867e49b66de&language=pt-BR
 * 
 * As requisições HTTP serão feitas com o AXIOS
 * npm install axios
 */

import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;