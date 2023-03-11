$(document).ready(function () {
    verificarSexo();
});

let sexo;

function verificarSexo() {
    
    array = JSON.parse(localStorage.getItem('players'));
  
    player = array.pop();

    if (player.sexo == "feminino") {
        $('.personagemDireitaImg').attr('src','/images/random girl.png')
        sexo = 'garota';
    }
    else{
        $('.personagemDireitaImg').attr('src','/images/random boy direita.png')
        sexo = 'garoto';
    }
}


let falas = ["Mas enfim","(Embora ela seja...)","Aquela é a tiff e se tem algo que ela odeia, é  que chamem ela de e-girl","Eita","EEEEEEEEEEEEEEEGGGGGGGGGGGGGGGIIIIIIIIIIII IIIIIIIIIRRRRRRRRRRRRRRLLLLLLLLLLL !!!!!!!!!!!","QUEM ME CHAMOU DE","QUEM ME CHAMOU","QUEM"," ...","Que barulho é esse?","QUEM FOI?!?!?!?!?","...","Mas com certeza você vai achar alguem que combine muito com v...","Essa escola é cheia de peças raras, alguns legais, outros meio doidos.","Se quiser, posso me disponibilizar pra te apresentar a escola e todo o pessoal!","Vi que você não falou com ninguém a aula toda.","Bom, muito prazer, eu sou o Rafa.","Você acabou de chegar na escola ne?","Eh ... oi."]

$('.avancar').click(function(){

    let falaAtual = falas.pop()

    if (falaAtual == " ...") {
        $('.footer').text('')
        $('.npc').text('')
        $('.textoNpc').text('')
        $('.section').removeClass('cena1')
        $('.section').addClass('cena2')
    }
    if (falaAtual == "QUEM FOI?!?!?!?!?") {

        let link;

        if (sexo == 'garoto') {
            link = '/images/random boy assustado.png' 
        }
        else{
            link = '/images/random girl.png'    
        }

        $('.personagemEsquerda').text('')

        $('.personagemEsquerda').append(`
        <img src="/images/rafael-assutado.png">
        `)

        $('.personagemDireita').text('')

        $('.personagemDireita').append(`
        <img src="${link}">
        `)

        $('.npc').text('???')
    }
    if (falaAtual == "Que barulho é esse?") {
        $('.npc').text('Rafa')
    }
    if (falaAtual == "QUEM") {
        $('.npc').text('???')
    }
    if (falaAtual == "EEEEEEEEEEEEEEEGGGGGGGGGGGGGGGIIIIIIIIIIII IIIIIIIIIRRRRRRRRRRRRRRLLLLLLLLLLL !!!!!!!!!!!") {
        
        $('.container').removeClass('footer')
        $('.container').addClass('footer2')
        
        $('.container').append(`
        <div class="tiff">
            <img src="/images/tiff-brava.png">
        </div>
        `)

        $('.textoNpc').text(falaAtual)
    }
    if (falaAtual == "Eita") {

        let link;

        $('.container').text('')
        $('.section').addClass('cena1')
        $('.section').removeClass('cena2')

        $('.container').removeClass('footer2')
        $('.container').addClass('footer')

        if (sexo == 'garoto') {
            link = '/images/random boy assustado.png' 
        }
        else{
            link = '/images/random girl.png'    
        }

        $('.container').append(`
        <div class="personagemEsquerda">
            <img src="/images/rafael esquerda.png">
        </div>
        <div class="personagemDireita">
            <img src="${link}">
        </div>
        `)

        $('.npc').text('Rafa')

        $('.textoNpc').text(falaAtual)
    }
    if (falaAtual == "(Embora ela seja...)"){
        
        $('.personagemEsquerda').text('')

        $('.personagemEsquerda').append(`
        <img src="/images/rafael-pensando-engracadinho.png">
        `)
    }
    if (falaAtual == "Mas enfim") {
        $('.personagemEsquerda').text('')

        $('.personagemEsquerda').append(`
        <img src="/images/rafael esquerda.png">
        `)

        $('.textoNpc').text(falaAtual)
    }
    else{
        $('.textoNpc').text(falaAtual)
    }

});
