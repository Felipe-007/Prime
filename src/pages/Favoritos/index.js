import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './favoritos.css';

export default function Favoritos() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");  //cria minhaLista recebendo de localStorage o primeflix
    setFilmes(JSON.parse(minhaLista) || [])  // coloca em setFilmes json recebido de minhaLista, caso nao tenha nada será feito um array vazio []
  }, [])

  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      <ul>
        {filmes.map((item) => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}