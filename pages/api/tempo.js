function tempo(request, response){
  const dynamicDate = new Date();

  reponse.json({
    date: dynamicDate.toGMTString()
  });
}

export default tempo;
