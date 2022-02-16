const validator = {
  isValid: function (cardnumber) {
    
    /* realizamos el revés de los números de la tarjeta */
    /*let numeroTarjeta1 = document.getElementById("cardNumber").value;*/
    const arregloNumeroTarjeta = Array.from(cardnumber);
    const reversaNumeroTarjeta = arregloNumeroTarjeta.reverse();
    const nuevoNumeroDeTarjeta = []
    const reversaANumero = reversaNumeroTarjeta.forEach((num) => {nuevoNumeroDeTarjeta.push(parseInt(num))});
    console.log (typeof(nuevoNumeroDeTarjeta[3]))
    console.log(nuevoNumeroDeTarjeta)

     /* duplicamos posciones pares y simplificación */
    const resultado = [];
    nuevoNumeroDeTarjeta.forEach((num, index) => {
      let modulo = (index + 1) % 2;
      if (modulo === 0){
        let dobleDePares = num * 2;
          if (dobleDePares >= 10){
          let cadenaMayoresQue10 = (Array.from(dobleDePares.toString())).map(Number);
            console.log(typeof(cadenaMayoresQue10[1]))
            console.log(cadenaMayoresQue10)
          let numeroFinalMayoresQue10 = cadenaMayoresQue10.reduce((acumulador, num) => acumulador + num);
          resultado.push(numeroFinalMayoresQue10)
        }
        else {
          resultado.push(dobleDePares)
        }
        
      }
      else {
        resultado.push(num)
      }
    })
    console.log(resultado)
     console.log(typeof(resultado[3]))

     /* validación */
     let validacionLuhn = resultado.reduce((acumulador, num) => acumulador + num);
     console.log(validacionLuhn)
     
        if(validacionLuhn % 10 === 0){
      return true
    }
    else{
      return false
    }
  },
   /*enmascarar número de tarjeta*/
  maskify: function (tarjeta) {
    /*const tarjeta = document.getElementById("cardNumber").value;*/
    const ultimosDigitos = tarjeta.slice(-4);
    const primerosDigitos = tarjeta
      .slice(0 , -4)
      .replace(/\d/g, "#");
    console.log(primerosDigitos + ultimosDigitos)
    return primerosDigitos + ultimosDigitos;
  }
      
};

export default validator;
