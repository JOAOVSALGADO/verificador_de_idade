function verificar() {
    var mas = window.document.getElementById('homem')
    var mul = window.document.getElementById('mulher')
    var res = window.document.getElementById('res')
    var img = window.document.getElementById('foto')
    var num = window.document.getElementById('numero')
    var num2 = Number (num.value)
    var fsex = window.document.getElementsByName ('radsex')

    if(fsex[0].checked)
        if (num2 > 0 && num2 <= 5){
        img.src = 'imagens/nenem.png'
        res.innerHTML = "Verificamos que se trata de um Nenem"
         }else if (num2 > 5 && num2 < 18) {
        res.innerHTML = "Verificamos que se trata de um adolecente de ate 18 anos."
        img.src = 'imagens/mulher/mulherate12anos.png'
       }else if (num2 >= 18 && num2 < 40) {
        res.innerHTML = "adulto de ate 40 anos."
        img.src = 'imagens/mulher/maior18.png'
       }
       else if (num2 >= 40 && num2 < 60) {
        res.innerHTML = "adulto de ate 40 anos."
        img.src = 'imagens/mulher/mulher40.png'
       }
       else if (num2 >= 60) {
        res.innerHTML = "Idoso maior que 60 anos"
        img.src = 'imagens/mulher/maior60.png'}
    
          else { res.innerHTML = "NENHUMA DAS OPÇOES"}

    if(fsex[1].checked)
    if (num2 > 0 && num2 <= 5){
        img.src = 'imagens/nenem.png'
        res.innerHTML = "Verificamos que se trata de um Nenem"
         }else if (num2 > 5 && num2 < 18) {
        res.innerHTML = "Verificamos que se trata de um adolecente de ate 18 anos."
        img.src = 'imagens/homem/criança5a18.png'
       }else if (num2 >= 18 && num2 < 40) {
        res.innerHTML = "adulto de ate 40 anos."
        img.src = 'imagens/homem/maior18.png'
       }
       else if (num2 >= 40 && num2 < 60) {
        res.innerHTML = "adulto de ate 40 anos."
        img.src = 'imagens/homem/maior40.png'
       }
       else if (num2 >= 60) {
        res.innerHTML = "Idoso maior que 60 anos"
        img.src = 'imagens/homem/m60.png'}
    
          else { res.innerHTML = "NENHUMA DAS OPÇOES"}


}