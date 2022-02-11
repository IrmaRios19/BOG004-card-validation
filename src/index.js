/*instrucciones botón guardar */
const btn1 = document.getElementById("btn1");

btn1.addEventListener('click', ()=>{
   let name = document.getElementById ("name").value;
   if (document.getElementById("name", "email", "phone", "direction", "city").value != "" == true){
      let guardar = alert ( "Hola " + name  + " tu registro se realizó con éxito!" );
   }
   else {
      alert("Diligencia todos los campos para tu registro")
   }
})

/* instrucciones botón validar */
import validator from './validator.js';

const btn2 = document.getElementById("btn2");
btn2.addEventListener('click', ()=>{
validator.isValid();
})
