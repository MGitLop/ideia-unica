import Link  from "next/link";
function Tempo(props){
  console.log('>Passando pelo Frontend')
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return(
    <div>
      {dynamicDateString} (dinamico)
      <br />
      {props.staticDateString} (estatico)
      <br />
      <Link href="/"> 
        <a>Acessar página Home</a>
      </Link>
    </div>
  )
}

export async function getStaticProps(){
  console.log('>Passando pelo getStaticProps();')
  // console.log('> Adicionando delay de 5 segundos')

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return{
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;
