document.addEventListener('DOMContentLoaded', function() {   
    document.getElementById('form-ingreso').addEventListener('submit', function(event) {
       event.preventDefault();


// se capturan los datos que vienen del html
let  inputAñomesNac = document.getElementById("año_mes").value; 
let  inputAñomesIng = document.getElementById("año_ingr_empr").value; 
let inputCargafam = document.getElementById("cargaFam").value; 

// aqui se sabe que dia es hoy
let today = new Date();
// aqui se obtine el año Actual
let añoActual= today.getFullYear();
// le sumo uno porque los meses en javascript comienzan en cero 
let  mesActual = today.getMonth() + 1;

let añoNac = inputAñomesNac.slice(0,4);
let mesNac = inputAñomesNac.slice(5,7);

let añoIng = inputAñomesIng.slice(0,4);
let mesIng = inputAñomesIng.slice(5,7);

// se valida con el select si esta en cero
if(inputCargafam == 0)
{
    let informe= "Debe Seleccionar Si es o No Carga Familiar";
    alert(informe);

}
else
{
// se carga la variable cargaFamiliar con el resultado que indico el usuario
if(inputCargafam==1)
        {
            cargaFamiliar="SI"
        }
        else 
        {
            cargaFamiliar="NO"
        }

{
// se guardan en nuevas variales el resultado de los tiempos que ingreso el usuario contra el actual 
let cantAño_persona = añoActual - añoNac;
let cantMes_persona = mesActual - mesNac;
let cantAño_ingreso = añoActual - añoIng;
let cantMes_ingreso = mesActual - mesIng;
let mesCumplir_emp = mesIng - mesActual;


//se calcula los años restantes
  if(cantMes_persona < 0) {
    
    cantMes_persona = 12 + cantMes_persona;
    cantAño_persona = cantAño_persona - 1;
     
  }
//se calcula los meses restantes
  if(cantMes_ingreso < 0) {
    
   cantMes_ingreso = 12 + cantMes_ingreso;
   cantAño_ingreso = cantAño_ingreso - 1;
     
  }
  
// se verifica si el usuario no ha nacido
  if((cantAño_persona == añoActual) && (cantMes_persona > 0))
   {
   let informe = "La persona es un Nonato, Sin Edad "+ "NO es carga Familiar";
   console.log(informe);
    
  }
  else
  {
    // se verifica si el usuario es menor de 2 años
   if(cantAño_persona <= 2)
   {
       let informe = "La persona es un Infante, " + cantAño_persona + "Años y " + cantMes_persona + " meses " + cargaFamiliar + " es carga Familiar";
       console.log(informe);
   }
   else 
   {
    // se verifica si el usuario es menor de 12 años
       if(cantAño_persona<=12)
       {
           let informe = " La persona es un Niño, " + cantAño_persona + "Años y " + cantMes_persona + " meses " + cargaFamiliar + " es carga Familiar";
           console.log(informe);
       }
       else
       {
        // se verifica si el usuario es menor de 18 años
           if(cantAño_persona<18)
           {
           let informe = " La persona es un Adolescente, " + cantAño_persona + "Años y " + cantMes_persona + " meses " + cargaFamiliar + " es carga Familiar";
           console.log(informe);
           }
           else
           {
            // se verifica si el usuario es menor de 65 años
               if(cantAño_persona<65)
               {
               let informe = "La persona es un Adulto, " + cantAño_persona + " Años y " + cantMes_persona + " meses " + cargaFamiliar + " es carga Familiar" + " Es un Personal Activo con: " + cantAño_ingreso + " Años y " + cantMes_ingreso + " Meses en la Empresa y en " + mesCumplir_emp + " Meses cumple su proximo año.";
               console.log(informe);
               }
               else
               {
                // se verifica si el usuario es menor de 85 años
                   if(cantAño_persona<85)
                   {
                       let informe = "La persona es un Adulto Mayor, carga familiar con: " + cantAño_persona + "Años y " + cantMes_persona + " meses" + cargaFamiliar + " es carga Familiar";
                       console.log(informe)
                   }
                   else
                   {
                    // se verifica si el usuario es mayor a 85 años
                       if(cantAño_persona>=85)
                       {
                           let informe = "Años Dorados, " + cantAño_persona + "Años y " + cantMes_persona + " meses " + cargaFamiliar + " es carga Familiar";
                           console.log(informe)
                       }
                   }
               }
           }
       }
   }
  }
}
}
})

});



