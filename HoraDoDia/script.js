//Recebendo horário.
var tempo = new Date()
var hora = tempo.getHours()
var minutos = tempo.getMinutes()
//Informando horário na div
document.getElementById('horas').innerText = `Agora são ${hora} horas e ${minutos} minutos.`

//imágem do tempo
var imagem = document.getElementById('imagem')
var corpo = document.querySelector('body')
if ((hora >= 6) && (hora <= 12 )){
    imagem.innerHTML = '<img src= "imagens/manhã.jpg" alt="manhã"></img>'
    corpo.style.background = 'rgb(216, 166, 73)'
} else if((hora >12) && (hora <18)){
    imagem.innerHTML = '<img src= "imagens/tarde.jpg" alt="tarde"></img>'
    corpo.style.background = 'rgba(158, 117, 42, 0.781)'
} else if((hora >= 18)&& (hora <24)){
    imagem.innerHTML = '<img src= "imagens/noite.jpg" alt="noite"></img>'
    corpo.style.background = 'rgba(49, 48, 45, 1.781)'
} else if((hora >= 0) && (hora < 6)){
    imagem.innerHTML = '<img src= "imagens/madrugada.jpg" alt="madrugada"></img>'
    corpo.style.background = 'rgba(11, 32, 70, 0.781)'
} else {
    alert('Informações inválidas')
}