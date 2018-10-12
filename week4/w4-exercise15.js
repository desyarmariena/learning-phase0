// Exercise 15 - Password Generator

/* Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
 */

function changeVocals (str) {
    //code di sini
    var resultStr = '';
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'a': resultStr += 'b'; break;
            case 'e': resultStr += 'f'; break;
            case 'i': resultStr += 'j'; break;
            case 'o': resultStr += 'p'; break;
            case 'u': resultStr += 't'; break;
            case 'A': resultStr += 'B'; break;
            case 'E': resultStr += 'F'; break;
            case 'I': resultStr += 'J'; break;
            case 'O': resultStr += 'P'; break;
            case 'U': resultStr += 'T'; break;
            default: resultStr += str[i]; break;
        }
    }
    return resultStr;
}

function reverseWord (str) {
//code di sini
    if(str.length === 1){
        return str;
    }
    return reverseWord(str.substring(1,str.length)) + str[0];
}

function setLowerUpperCase (str) {
//code di sini
    var strResult = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            strResult += str[i].toUpperCase();
        } else {
            strResult += str[i].toLowerCase();
        }
    }
    return strResult;
}

function removeSpaces (str) {
    //code di sini
    var strResult = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            strResult += str[i];
        }
    }
    return strResult;
}

function passwordGenerator (name) {
//code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    var vocalChanged = changeVocals(name);
    var strReversed = reverseWord(vocalChanged);
    var lowerUpperCased = setLowerUpperCase(strReversed);
    var spaceRemoved = removeSpaces(lowerUpperCased);
    

    return spaceRemoved;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'