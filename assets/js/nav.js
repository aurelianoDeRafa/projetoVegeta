function inicio(){
    document.querySelector('.area-conteudo').style.display = 'flex';
    document.querySelector('.area-conteudo-2').style.display = 'none';
    document.querySelector('.area-conteudo-3').style.display = 'none';
}

function transformacao(){
    document.querySelector('.area-conteudo').style.display = 'none';
    document.querySelector('.area-conteudo-2').style.display = 'flex';
    document.querySelector('.area-conteudo-3').style.display = 'none';
}

function historia(){
    document.querySelector('.area-conteudo').style.display = 'none';
    document.querySelector('.area-conteudo-2').style.display = 'none';
    document.querySelector('.area-conteudo-3').style.display = 'flex';
}