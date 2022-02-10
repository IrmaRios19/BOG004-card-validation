import validator from './validator.js';

const btn1 = document.getElementById("btn1");
btn1.addEventListener('click',()=>{
   let name = document.getElementById ("name").value;
   if (document.getElementById("name", "email", "phone", "direction", "city").value != "" == true){
      let guardar = alert ( "Hola " + name  + " tu registro se realizó con éxito!" );
   }
   else {
      alert("Diligencia todos los campos para tu registro")
   }
})

console.log(validator);
