let array = [];

$('.selecionarGarota').click(function(){
    
    array = JSON.parse(localStorage.getItem('players'));
  
    player = array.pop();
      
    let newPlayer = {
        nomePersonagem: player.nomePersonagem,
        sexo: "feminino"
    }
      
    array.push(newPlayer);
      
    localStorage.players = JSON.stringify(array);

    window.location = './inicio.html';

});

$('.selecionarGaroto').click(function(){
    
    array = JSON.parse(localStorage.getItem('players'));
  
    player = array.pop();
      
    let newPlayer = {
        nomePersonagem: player.nomePersonagem,
        sexo: "masculino"
    }
      
    array.push(newPlayer);
      
    localStorage.players = JSON.stringify(array);

    window.location = './inicio.html';

});