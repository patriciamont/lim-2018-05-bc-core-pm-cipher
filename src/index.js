const box_one = document.getElementById("mensaje");
const boton = document.getElementById("botone");
boton.addEventListener("click",cifrarMensaje);

const box_two = document.getElementById("descifrar")
const boton2 = document.getElementById("botone2")
boton2.addEventListener("click",decifrarMensaje)



function cifrarMensaje(){

    const text = box_one.value;
    box_two.value = text;
}
function decifrarMensaje(){
    const text = box_one.value;
    box_two.value = text;

}

