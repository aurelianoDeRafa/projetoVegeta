const img = document.getElementById('imgVegeta');
const descriTexto = document.querySelector('.mine-descri p');
const clickTransfor = document.getElementById('clickTrasnfor');


const blococlck = (evento) => {
    trocaTransfor[evento.target.id]();
}

const trocaTransfor = {
    'vegeta': ()=>{img.src = 'assets/img/inicio/vegeta.png',
    descriTexto.innerHTML = 'A forma base de Vegeta é ele sem nenhuma transformação, e que fica mais forte apenas por meio do treinamento constante que o Saiyajin impõe a si mesmo.'
},
    'oozaru': ()=>{img.src = 'assets/img/transformação/int/oozaru.png',
        descriTexto.innerHTML = 'Vegeta foi o primeiro personagem de Dragon Ball a mostrar controle da transformação Oozaru, onde ele aumenta seu poder em 10 vezes. Esta é a única de todas as transformações de Vegeta que ele perdeu, já que a cauda dele não cresce mais.'
},
    'ssj1': ()=>{img.src = 'assets/img/transformação/int/ssj.png',
            descriTexto.innerHTML= 'Ver Vegeta transformado em Super Saiyajin é tão comum que é quase como se ele sempre tivesse conseguido alcançar este nível de poder. Porém, na verdade ele só foi capaz de transformar-se em Super Saiyajin durante a saga dos Androides, surpreendendo todo mundo que acreditava que somente aqueles com coração puro conseguiam tão nível de poder. Até hoje não sabemos ao certo se a profecia estava errada, ou se Vegeta possui um coração puro há mais tempo do que parece.'
},
    'superSsj1': ()=>{img.src = 'assets/img/transformação/int/superVegeta.png',
    descriTexto.innerHTML= 'Como se a transformação em Super Saiyajin não fosse suficiente para a saga, Vegeta ainda foi capaz de nos surpreender com uma versão ainda mais poderosa desta transformação. Estamos falando do Vegeta Super Saiyajin Grau 2, que as vezes é chamado por ai de Super Vegeta.'
},
    'ssj2': ()=>{img.src = 'assets/img/transformação/int/ssj2.png',
        descriTexto.innerHTML= 'O poder do Super Vegeta já era incrível e provavelmente era o limite máximo que a transformação de Super Saiyajin poderia oferecer. Para alcançar ainda mais poder, Vegeta teve que conseguir se transformar no Super Saiyajin 2, que é um novo estágio de poder, muito mais poderoso do que o primeiro.'
},
    'majin': ()=>{img.src = 'assets/img/transformação/int/vegetaMajin.png',
    descriTexto.innerHTML= 'Apesar de estar no nível de Super Saiyajin 2, o Majin Vegeta ganhou uma nova camada de poder conferida pelo mago Babidi. Basicamente, ele aceitou virar a casaca só pela possibilidade de lutar novamente com Goku, já que naquele momento o príncipe dos Saiyajins estava passando por uma verdadeira crise existencial, já que o fato de ter abdicado a vida de mercenário espacial para virar pai de família acabou mexendo com sua personalidade.'
},
    'blue': ()=>{img.src = 'assets/img/transformação/int/vegetaBlue.png',
    descriTexto.innerHTML= 'Durante A Batalha dos Deuses, vemos Goku descobrindo um novo tipo de poder com a transformação dele no Deus Super Saiyajin. Mais tarde, ele e Vegeta acabam conseguindo alcançar um nível de poder similar, com a transformação Super Saiyajin Blue.'
},
  'deus': ()=>{img.src = 'assets/img/transformação/int/vegetaDeus.png',
        descriTexto.innerHTML= 'Esta transformação foi apresentada pela primeira vez no mangá de Dragon Ball Super, durante a saga de Goku Black, e posteriormente em Dragon Ball Super: Broly.'
},
}

clickTransfor.addEventListener('click', blococlck)