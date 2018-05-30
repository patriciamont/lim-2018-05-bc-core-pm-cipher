window.cipher = {
    encode:function (offset,string){
        let d=parseInt(offset);
        let mensaje="";
        for (let i=0;i<string.length;i++){
            let code=string.charCodeAt(i);
            if (code >=65 && code<=90){
            let word_mayuscula= String.fromCharCode((code - 65+d)%26+65);
            mensaje +=word_mayuscula;
            }   else if(code >=97 && code<=122){
            let word_minuscula=String.fromCharCode((code - 97+d)%26+97);
            mensaje+=word_minuscula;
            //si no cumple mis condiciones ejemplo -; cualquier otro signo.
         }else {
                let noCaracter= String.fromCharCode(code);
         mensaje+=noCaracter;
        }
        }
    return mensaje;
    },

    decode:function (offset,string){
        let d=parseInt(offset);
        let mensaje="";
        for (let i=0;i<string.length;i++){

            let code=string.charCodeAt(i);

            if (code >=65 && code<=90){
            let word_mayuscula= String.fromCharCode((code - 65-d)%26+91);
            mensaje +=word_mayuscula;
            }   else if(code >=97 && code<=122){
            let word_minuscula=String.fromCharCode((code - 97-d)%26+123);
                    if((code-97-d)%26==0 ||(code-97-d)%26>0){
                        word_minuscula=String.fromCharCode((code - 97-d)%26+97);
                    }
            mensaje+=word_minuscula;
         //si no cumple mis condiciones ejemplo -; cualquier otro signo.
            }    else {
                let noCaracter= String.fromCharCode(code);
             mensaje+=noCaracter;
         }
    }
    return mensaje;
    },


    }

  
