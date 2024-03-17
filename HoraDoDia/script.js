//Recebendo horário.
var tempo = new Date()
var hora = tempo.getHours()
var minutos = tempo.getMinutes()

//Informando horário na div
document.getElementById('horas').innerText = `Agora são ${hora} horas e ${minutos} minutos.`

//imágem do tempo
var imagem = document.getElementById('imagem')
if ((hora >= 6) && (hora <= 12 )){
    imagem.innerHTML = '<img src= "imagens/manhã.jpg" alt="manhã"></img>'
} else if((hora >12) && (hora <18)){
    imagem.innerHTML = '<img src= "imagens/tarde.jpg" alt="tarde"></img>'
} else if((hora >= 18)&& (hora <24)){
    imagem.innerHTML = '<img src= "imagens/noite.jpg" alt="noite"></img>'
} else if((hora >= 0) && (hora < 6)){
    imagem.innerHTML = '<img src= "imagens/madrugada.jpg" alt="madrugada"></img>'
} else {
    alert('Informações inválidas')
}