import validator from "./validator.js";
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
   adress: /^[a-zA-ZÀ-ÿ0-9-#.\s]+$/, // letras y espacios, números, punto, guión y numeral.
   city: /^[a-zA-ZÀ-ÿ\s]+$/, // Letras y espacios, pueden llevar acentos
   cardNumber: /^\d+$/, // sólo numeros.
   nameCard: /^[a-zA-ZÀ-ÿ\s]$/, // Letras y espacios, pueden llevar acentos.
   cvs: /^\d{1,999}$/ // 1 a 9999 numeros.
}

const campos ={
   name: false,
   email: false,
   phone: false,
   adress: false,
   city: false,
   cardNumber: false,
   cuotas: false,
   nameCard: false,
   cvs: false

}


const validarCampo = (expresion, input, campo) => {
   if(expresion.test(input.value)){
      campos[campo] = true;
   } else {
      campos[campo] = false;
      console.log("diligencia correctamente el campo")
      
   }
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'name');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
		break;
		case "adress":
			validarCampo(expresiones.adress, e.target, 'adress');
		break;
		case "city":
			validarCampo(expresiones.city, e.target, 'city');
		break;
      case "cardNumber":
			validarCampo(expresiones.cardNumber, e.target, 'cardNumber');
		break;
      case "nameCard":
			validarCampo(expresiones.nameCard, e.target, 'nameCard');
		break;
      case "cvs":
			validarCampo(expresiones.cvs, e.target, 'cvs');
		break;
	}
}

 
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	})

formulario.addEventListener('btn1', (e) => {
	
	
	if( campos.cardNumber && campos.email && campos.phone && campos.adress && campos.city){
		formulario.reset();
   }
   else{
      alert("hagale bien")
   }
})


/*formulario.addEventListener('btn2', (e) => {
	e.preventDefault();
	
	if( campos.cardNumber && campos.nameCard && campos.cvs){
      function fillArray() {
         let valor = document.getElementById("cardNumber").value;
         validator.isValid(valor);
         validator.maskify(valor);
         console.log(validator);
       }
      let buttonValidate = document.getElementById("btn2");
      buttonValidate.addEventListener("click", fillArray);
   
   }
   else{
      alert("diligencia bien")
   }
})*/

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click',(e)=>{
   e.preventDefault();
   let tarjeta = document.getElementById("cardNumber").value;
   /*if( campos.cardNumber && campos.nameCard && campos.cvs){*/
         let validacion = validator.isValid(tarjeta);
         validator.maskify(tarjeta);
         console.log(validator);
         if(validacion === true){
            alert ("Tu tarjeta ha sido validada con éxito")
         }
         else{
            alert ("Ingresa un número de tarjeta válido")

         }
   
   /*else{
      alert("diligencia bien")
   }*/

})




 
