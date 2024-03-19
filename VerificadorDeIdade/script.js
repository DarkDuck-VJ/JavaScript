//função verificar
function verificar(){
    //recebendo as informações da data em tempo real
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('Informações inválidas')
    } else {
        var Fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var pronome = ''

        //Criando o elemento de tag img
        var img = document.createElement('img')
        //atribuindo o id
        img.setAttribute('id', 'foto')

        if(Fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criançaHomem.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemHomem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultoHomem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosoHomem.jpg')
            }
        } else if(Fsex[1].checked){
            genero = 'mulher'
            var pronome = 'a'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/criançaMenina.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemMulher.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultaMulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosaMulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Você é um${pronome} ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}



