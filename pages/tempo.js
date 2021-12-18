import Link  from "next/link";
function Tempo(props){
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

export function getStaticProps(){
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return{
    props: {
      staticDateString
    }
  }
}

export default Tempo;
