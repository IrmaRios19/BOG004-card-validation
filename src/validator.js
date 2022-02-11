const validator = {
  isValid: function(creditCardNumber){

    /* realizamos el revés de los números de la tarjeta */
    const numeroTarjeta = document.getElementById("cardNumber").value;
    const arregloNumeroTarjeta = Array.from(numeroTarjeta);
    const reversaNumeroTarjeta = arregloNumeroTarjeta.reverse();
    console.log (reversaNumeroTarjeta);

    /* duplicamos posciones pares y simplificación */
    const resultado = [];
    reversaNumeroTarjeta.forEach((num, index) => {
      let modulo = (index + 1) % 2;
      if (modulo === 0){
        let dobleDePares = parseInt(num) * 2;
         if (dobleDePares >= 10){
          let paresATexto = dobleDePares.toString();
          let separarParesTexto = paresATexto.split("");
          let declaracionParaReduce = (a,b) => parseInt(a) + parseInt(b);

          let reduceDePares = separarParesTexto.reduce(declaracionParaReduce)
          console.log(reduceDePares)
          resultado.push(reduceDePares)
        }
        else {
          resultado.push(dobleDePares)
        }
        
      }

      else{
        resultado.push(parseInt(num))
        
      }
      console.log(resultado)
    });

     /* validación */
     
    let totalDeLaValidacion = 0;
    for(let i = 0 ; i <= resultado.lenght ; i++ ){
        totalDeLaValidacion += resultado[i];
    }
    console.log(totalDeLaValidacion)
    if(totalDeLaValidacion % 10 == 0){
      alert("Tu tarjeta ha sido validada con éxito")
    }
    else{
      alert("Por favor ingresa un número de tarjeta válido")
    }
  }

  /* enmascarar número de tarjeta */
  maskify: function(creditCardNumber){
    const numeroTarjeta2 = document.getElementById(cardNumber).value;
    console.log(numeroTarjeta2)
    const ultimosDigitos = numeroTarjeta2.slice(-4);
    const enmascararCon = "#";
    const enmascarar = enmascararCon.repeat(numeroTarjeta2 - ultimosDigitos) + ultimosDigitos;
    console.log(enmascarar)
  } 
  
  
};

export default validator;
