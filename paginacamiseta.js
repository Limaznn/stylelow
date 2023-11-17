$(document).ready(function(){
    const url = window.location.href;
    let arrayUrl = url.split("?");
    $('.imgCamisa').html('');
    $('.Informacoes').html('');
    let camisaImg = `<img src="./assets/`+arrayUrl[1]+`" >`;
    let camisaH1 = `<h1>`+arrayUrl[2]+`</h1>`;
    $('.imgCamisa').html(camisaImg);
    $('.Informacoes').html(camisaH1);
});