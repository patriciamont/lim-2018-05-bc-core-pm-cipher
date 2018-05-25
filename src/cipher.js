//window.cipher = {
  // ... 
//};
let box_one = document.getElementById("mensaje");
let boton = document.getElementById("botone");
boton.addEventListener("click",cifrarMensaje(box_one));



let box_two = document.getElementById("descifrar");
let boton2 = document.getElementById("botone2");
boton2.addEventListener("click",decifrarMensaje);

let texto=box_one.toUpperCse();
let raro="";
function cifrarMensaje(){
    for(let i= 0; i<texto.length;i++){
        ((texto.charCodeAt(i)-65+3)%26+65);
        String.fromCharCode((texto.charCodeAt(i)-65+3)%26+65);
        raro=raro +  String.fromCharCode((texto.charCodeAt(i)-65+3)%26+65);
        let respuesta =raro;
        respuesta= box_one.value;
        box_two=respuesta;
        
    }
}

//function cifrarMensaje(){
  // let raro = "";
    //for (let i=0;i<box_one.length;i++){
      // let palabra= box_one.charCodeAt(i);
      //let code=  ((box_one.charCodeAt(i)-65+33)%26+65);
       //let letra= String.fromCharCode(codes);
        //raro += palabra;
    //}
    //console.log(raro);
        //box_two.value=raro;
    //}
  

//function decifrarMensaje(){
  //  let text = box_one.value;
    //box_two.value = text;}