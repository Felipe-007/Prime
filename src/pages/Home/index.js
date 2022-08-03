import { useState, useEffect } from "react";  // useState pega os filmes da api, useEffect armazena os filmes
import api from "../../services/api";

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a4267de68eb55817f90b4867e49b66de",
          language: "pt-BR",
          page: 1,
        }
      })
      console.log(response.data.results);
    }
    loadFilmes();
  }, [])


  return (
    <h1>Bem vindo a Home</h1>
  );
}