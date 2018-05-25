window.cipher = {
    encode:function (){
        let mensaje="";
        let letra=box_one.value;
        for (let i=0;i<letra.length;i++){

            let code=letra.charCodeAt(i);

            if (code >=65 && code<=90){
            word_mayuscula= String.fromCharCode((code - 65+33)%26+65);
            mensaje +=word_mayuscula;
            }   else if(code >=97 && code<=122){
             word_minuscula=String.fromCharCode((code - 97+33)%26+97);
            mensaje+=word_minuscula;
            //si no cumple mis condiciones ejemplo -; cualquier otro signo.
         }else {
                let noCaracter= String.fromCharCode(code);
         mensaje+=noCaracter;
        }
        }
    box_two.value=mensaje;
    },


    decode:function (){
        let mensaje="";
        let letra=box_one.value;
        for (let i=0;i<letra.length;i++){

            let code=letra.charCodeAt(i);

            if (code >=65 && code<=90){
            word_mayuscula= String.fromCharCode((code - 65+19)%26+65);
            mensaje +=word_mayuscula;
            }   else if(code >=97 && code<=122){
             word_minuscula=String.fromCharCode((code - 97+19)%26+97);
            mensaje+=word_minuscula;
         //si no cumple mis condiciones ejemplo -; cualquier otro signo.
            }    else {
                let noCaracter= String.fromCharCode(code);
             mensaje+=noCaracter;
         }
    }
    box_two.value=mensaje;
    },
    createCipherWithOffset:function(){
        const letra= "abcdefghijklmnopqrstuvwxyz";
        const metod= cipher.encode(letra);
        const metod2= cipher.decode(letra);
    }
};