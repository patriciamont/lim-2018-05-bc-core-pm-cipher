window.cipher = {
    encode: (offset,string)=>{
        let d=parseInt(offset);
        let outputMessage="";
        for (let i=0;i<string.length;i++){
            let code=string.charCodeAt(i); // transformando al codigo ascii.
            if (code >=65 && code<=90){
            let uppercase_word= String.fromCharCode((code - 65+d)%26+65);
            outputMessage +=uppercase_word;
            }   else if(code >=97 && code<=122){
            let lowercase_word=String.fromCharCode((code - 97+d)%26+97);
            outputMessage+=lowercase_word;
     //si no cumple mis condiciones ejemplo -; cualquier otro signo volverá aparaecer el mismo signo ingresado al inicio.
            } else if(code >=48 && code <=57){
            let withNumbers= String.fromCharCode((code - 48 + d)%10 + 48);
            outputMessage +=withNumbers;

                }
             else {
                let anotherSing= String.fromCharCode(code);
         outputMessage += anotherSing;
        }
        }
    return outputMessage;
    },

    decode: (offset,string)=>{
        let d=parseInt(offset);
        let outputMessage="";
        for (let i=0;i<string.length;i++){

            let code=string.charCodeAt(i);

            if (code >=65 && code<=90){
            let uppercase_word= String.fromCharCode((code - 65-d)%26+91);
                if((code-65-d)%26==0 || (code-65-d)%26>0){
                    uppercase_word=String.fromCharCode((code-65-d)%26+65);
                }
            outputMessage +=uppercase_word;
            }   else if(code >=97 && code<=122){
            let lowercase_word=String.fromCharCode((code - 97-d)%26+123);
                    if((code-97-d)%26==0 ||(code-97-d)%26>0){
                        lowercase_word=String.fromCharCode((code - 97-d)%26+97);
                    }
            outputMessage+=lowercase_word;
         //si no cumple mis condiciones ejemplo -; cualquier otro signo.
            }    else {
                let anotherSign= String.fromCharCode(code);
             outputMessage+=anotherSign;
         }
    }
    return outputMessage;
    },
    createCipherWithOffset: (offset)=>{
        let codeMaster={ 
            encode: (string) => {
               return cipher.encode(offset,string);
            },

            decode: (string) => {
                return cipher.decode(offset,string);

            }
        }
        return codeMaster

    }

}

  
