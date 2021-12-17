import { useState } from 'react';

function Home(){
  return(
    <div>
      <h1>Pagina da branch teste</h1>
      <p>Teste de deploy no VERCEL</p>
      <Contador />  
    </div>

  )
}

function Contador(){
  const [contador,setContador] = useState(1);

  function adicionarContador(){
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Home
