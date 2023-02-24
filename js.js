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
   let img = document.createElement('img')//criei o elemento img do html
   img.setAttribute("id", "foto")//criei um id para ele
   if(fsex[0].checked){
    genero = "Homem"
    
     if (idade >=0 && idade <10){
         img.setAttribute("src", "criançaM.jpg")
     }else if (idade < 21){
         img.setAttribute("src", "jovemM.jpg")
     }else if (idade <50){
         img.setAttribute("src", "adultoM.jpg")
     }else if (idade >50){
         img.setAttribute("src", "idosoM.jpg")
     }

   }else if (fsex[1].checked){
     genero = "Mulher"

     if (idade >=0 && idade <10){
      img.setAttribute("src", "criançaF.jpg")
    }else if (idade < 21){
      img.setAttribute("src", "jovemF.jpg")
    }else if (idade <50){
      img.setAttribute("src", "adultoF.jpg")
    }else if (idade >50){
      img.setAttribute("src", "idosaF.jpg")
    }
   }
  
   res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   res.appendChild(img) //PARA APARECER A IMAGEM NA TELA
   res.style.textAlign = "center"
   img.style.borderRadius = "50%"
   img.style.maxWidth = "180px"
}

}