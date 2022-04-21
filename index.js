function carregar () {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  //var hora = 15
  var hora = data.getHours();
  msg.innerHTML = `<strong>Agora são ${hora} horas.<strong>`
  if  (hora >= 0 && hora < 12) {
    //Bom dia
    img.src="./imagens/manha.webp";
    document.body.style.background = rgb(200, 60, 30 );
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src="./imagens/tarde.jpg";
    document.body.style.background = rgb(2, 60, 30 );
  } else {
    //Boa noite 
    img.src="./imagens/noite.jpeg";
    document.body.style.background = rgb(200, 200, 30 );
  }
}
