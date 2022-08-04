import { useState, useEffect } from "react";  // useState pega os filmes da api, useEffect armazena os filmes
import api from "../../services/api";
import { Link } from "react-router-dom";
import './styles.css';

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
      setFilmes(response.data.results.slice(0, 10))
    }
    loadFilmes();
  }, [])


  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {  //percorre todo o array de filme
          return(
            //encontra o filme pelo id
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}