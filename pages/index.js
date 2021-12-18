import Link from 'next/link'
function Home(){
  return(
    <div>
      <h1>Pagina teste</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
      <br />
      <Link href="/tempo">
        <a>Pagina Tempo</a>
      </Link>
    </div>
  )
}

export default Home
