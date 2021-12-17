import Link from 'next/link';

function Sobre(){
  return(
    <div>
      <h1>Sobre</h1>
      <p>Nova página sobre inclusa!</p>
      <Link href="/"> 
      <a>Acessar página Home</a>
      </Link>
    </div>
  )
}

export default Sobre 
