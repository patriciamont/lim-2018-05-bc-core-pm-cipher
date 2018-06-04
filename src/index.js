//llamando a mi primera caja de texto.
let box_one = document.getElementById("message");
//llamando a mi primer botón de Cifrar de mi html.
let encrypt=document.getElementById("encryptmessage");
//Aquí el usuario pone su numero de desplazamineto.
let numberDisplacement=document.getElementById("displace");
// Se llama al boton Descifrar de mi html
let decipher= document.getElementById("deciphermessage");
//Es mi segunda caja donde aparecen mis resultados.
let box_two = document.getElementById("secondbox");
//Cuando el usuario haga click en el boton de Cifrar se efectuará la función de encode (cifrar mensaje).
encrypt.addEventListener("click",function(){
box_two.value=cipher.encode(numberDisplacement.value,box_one.value);

});

//Cuando el usuario haga click en el botón Descifrar se efectuará la función de decode (descifrar mensaje).
decipher.addEventListener("click",function(){
 box_two.value=cipher.decode(numberDisplacement.value,box_one.value);
})
