let musica = document.querySelector ('audio');

document.querySelector ('.botao-play').addEventListener ('click', tocarmusica);

document.querySelector ('.botao-pause').addEventListener ('click', pausarmusica);

musica.addEventListener ('timeupdate',atualizarbarra);

function tocarmusica (){
    musica.play();
    document.querySelector ('.botao-pause').style.display ='block';
    document.querySelector ('botao-play').style.display='none';

}

function pausarmusica (){
    musica.pause ();
    document.querySelector('botao-pause').style.display = 'none';
    document.querySelector ('botao-play').style.display='block';
}

function atualizarbarra(){
    let barra = document.querySelector ('progress');
    barra.style.width= Math.floor (musica.currentTime / musica.duration)* 100 + '%';
    let tempodecorrido = document.querySelector ('.inicio');
    tempodecorrido.textContent = Math.floor (musica.currentTime);
}










