let d=parseInt(desplazamiento.value);
let letra=box_one.value;

let box_one = document.getElementById("mensaje");
let boton = document.getElementById("botone");
let box_two = document.getElementById("descifrar");


let boton2= document.getElementById("botone2");
let desplazamiento=document.getElementById("desplazar");

boton.addEventListener("click",cipher.encode());


boton2.addEventListener("click",cipher.decode());


