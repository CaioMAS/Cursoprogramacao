function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = document.getElementById("res")
if (fano.value.length == 0 || fano.value > ano){
  window.alert('[ERRO] Verifique os dados novamente !')
} else {
  var fsex = window.document.getElementsByTagName('radsex')
  var idade = ano - Number(fano.value)
  var genero = ''
  if(fsex[0].checked){
    genero = 'Homem'
    if (idade >=0 && idade < 10)
  }else if(fsex[1].checked){
    genero = 'Mulher'
  }
  res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
}
  
}





