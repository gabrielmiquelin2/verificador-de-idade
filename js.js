function verificar (){
  let data = new Date ()
  let ano = data.getFullYear() //ano completo
  let fano = document.getElementById("txtano")
  let res = document.getElementById("res")

  if (fano.value.length == 0 || Number(fano.value) > ano) { //Se ele não digitar o ano isso acontece ou se o ano for maior que o atual
     window.alert("[ERRO] Verifique os dados e tente novamente")
}else{
   let fsex = document.getElementsByName("radsex")
   let idade = ano - Number(fano.value)
   let genero = ""
   if(fsex[0].checked){
    genero = "Homem"
   }else if (fsex[1].checked){
    
   }
}

}