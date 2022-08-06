import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  //useNavigate = apontará para a página de erro
import api from "../../services/api";
import './filme-info.css';

export default function Filme() {

  const { id } = useParams();
  const navigate = useNavigate();  //apontará para a página de erro
  const [filme, setFilme] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {  // aqui fará a requisição para a api, conexão
        params: {
          api_key: "a4267de68eb55817f90b4867e49b66de",
          language: "pt-BR",
        }
      })
        .then((response) => {  //cairá aqui caso de certo
          setFilme(response.data);  // envia os dados da api para setFilme
          setLoading(false); //ira desmontar no final para nao carregar em loop
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("*", { replace: true });  //apontará para a página de erro
          return;
        })
    }

    loadFilme();

    return () => {
      console.log("Componente desmontado")
    }
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_avarage} / 10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}