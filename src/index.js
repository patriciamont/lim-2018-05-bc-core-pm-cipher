let box_one = document.getElementById("mensaje");
let cifrar=document.getElementById("botone");
let desplazamiento=document.getElementById("desplazar");

let boton2= document.getElementById("botone2");
let box_two = document.getElementById("descifrar");


cifrar.addEventListener("click",function(){
box_two.value=cipher.encode(desplazamiento.value,box_one.value);

});


boton2.addEventListener("click",function(){
 box_two.value=cipher.decode(desplazamiento.value,box_one.value);
})
