let array = [];

$('.botaoNext').click(function(){

    if (localStorage.players) {
        array = JSON.parse(localStorage.getItem('players'))
    }
      
    let player = {
        nomePersonagem: $(".inputNomePersonagem").val()
    }
      
    array.push(player);
      
    localStorage.players = JSON.stringify(array);
      
    window.location = './selecionar-personagem.html';
      
});