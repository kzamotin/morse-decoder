const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    // write your solution here
    
    var result=""
    
    for (let i = 0; i < expr.length; i+=10) {
       var letter=expr.slice(i,i+10);
       
       console.log(letter)
       
       var morse_code = ""
       
       if (letter === "**********") {
           result += " "
       }
       else{
           for (let j = 0; j < letter.length; j+=2) {
               var code=letter.slice(j,j+2);
               console.log(code)
               
               if (code ==="10"){
                   morse_code +="."
               }
               if (code ==="11"){
                   morse_code +="-"
               }
               
           }
           result += MORSE_TABLE[morse_code]
           console.log(morse_code)
        }   
        
    }
    
    return result
}

module.exports = {
    decode
}