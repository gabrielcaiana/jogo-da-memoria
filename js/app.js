let selecionado;
let selecionado_antes;
let pares = false;
let list_selecionados = [];
let list_card;
let list_encontrados = [];
let nameClassFirst;
let nameClassFirstSecond;
let list_card_reais = [];
let colors = ["#ee82ee","#a9a9a9","#40e0d0","#ffff00" ,"#f0e68c","#dc143c","#7fff00","#f4a460"];

controlCard();

// Função para controlar todas as ações de clique dos cards
function controlCard() {
    $('ul.deck li').each(function(index, value){
        $(this).click(function(){
            selecionado = $(this); //armazenando na variavel selected o card que foi clicado

            nameClassFirst = selecionado.children().attr('class'); // armazenando a classe do card clicado 'figura'

            list_selecionados.push(nameClassFirst); // Armazenando a primeira classe nesta variavel para ser comparada posteriormente
            
            if(list_selecionados.length <= 1){
                abrir_ou_fechar(true,selecionado);
                bloquearCard(selecionado,true);
                list_card_reais[0] = $(this);
                selecionado_antes = selecionado;
            }

            if (list_selecionados.length == 2){
                bloquearCard(selecionado_antes,true);
                bloquearCard(selecionado,true);
                list_card_reais[1] = $(this);
                abrir_ou_fechar(true, selecionado);
            }

            // Verificando se card 1 é igual ao card 2

                if(list_selecionados[0] === list_selecionados[1] ){

                }
        });
    });
}

// Função abrir ou fechar card
function abrir_ou_fechar(abrirOuFechar, card){
    if(card != null){
        if(abrirOuFechar == true) {
            setTimeout(function(){ card.css('transform','rotateY(50deg)'); }, 100);
			setTimeout(function(){ card.css('transform','rotateY(100deg)'); }, 150);
			setTimeout(function(){ card.css('transform','rotateY(130deg)'); }, 200);
			setTimeout(function(){ card.css('transform','rotateY(180deg)'); }, 250);
			setTimeout(function(){ card.css('background','#02b3e4'); }, 250);
			setTimeout(function(){ card.addClass('open show'); }, 250);
        }else {
            setTimeout(function(){ card.css('background','#2e3d49'); }, 100);
			setTimeout(function(){ card.removeClass('open show'); }, 100);
			setTimeout(function(){ card.css('transform','rotateY(50deg)'); }, 100);
			setTimeout(function(){ card.css('transform','rotateY(100deg)'); }, 150);
			setTimeout(function(){ card.css('transform','rotateY(130deg)'); }, 200);
			setTimeout(function(){ card.css('transform','rotateY(180deg)'); }, 250);
			setTimeout(function(){ bloquearCard($('ul.deck li'),false);}, 260);
        }
    }
}

//função bloquear card
function bloquearCard(objetoSelecionado, block){
    if(objetoSelecionado != null){
        if(block == true){
            objetoSelecionado.css("pointer-events", 'none');
        }else{
            objetoSelecionado.css("pointer-events", 'auto');
        }
    }
}

// Função para aplicar efeito no card após o acerto
function efeitoCardCorreto(cartaSelecionada, auxiliar) {
    if(cartaSelecionada != null) {
        if(auxiliar == true) {
            cartaSelecionada.animate({height:"80px"},200);
            cartaSelecionada.animate({height:"125px"},300);
        }else{
            cartaSelecionada.animate({height:"80px"},300);
            cartaSelecionada.animate({height:"80px"},450);
        }
    }
}

