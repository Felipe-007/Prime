import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export default function Filme() {

  const {id} = useParams();
  const [filme, setFilme] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    async function loadFilme(){
      await api.get(`/movie/${id}`,{  // aqui fará a requisição para a api, conexão
        params:{
          api_key: "a4267de68eb55817f90b4867e49b66de",
          language: "pt-BR",
        }
      })
      .then((response)=>{  //cairá aqui caso de certo
        setFilme(response.data);  // envia os dados da api para setFilme
        setLoading(false); //ira desmontar no final para nao carregar em loop
      })
      .catch(() =>{
        console.log("Filme não encontrado");
      })
    }

    loadFilme();

    return () => {
      console.log("Componente desmontado")
    }
  }, []);

  if(loading){
    return(
      <div className="filme-info">
        <h1>Carregando detalhes</h1>
      </div>
    )
  }

  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_avarage} / 10</strong>
    </div>
  );
}