function tempo(request,response){
  const dynamicDate = new Date();

  reponse.jason({
    date: dynamicDate.toGMTString()
  });
}

export default tempo;
