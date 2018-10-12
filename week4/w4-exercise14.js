// Exercise 14 - Most Frequent Largest Numbers

/* Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers! */

function sorting(arrNumber) {
    // code di sini
    for(var i = 0; i < arrNumber.length; i++){
        for(var j = 0; j < arrNumber.length; j++){
            if(arrNumber[j] < arrNumber[i]){
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[j];
                arrNumber[j] = temp;                
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
// code di sini
    if(arrNumber.length === 0){
        return '';
    }

    var highest = arrNumber[0];
    var countHighest = 0;
    
    var i = 0;
    while(arrNumber[i] === highest){
        countHighest++;
        i++;
    }
        
    var strResult = 'angka paling besar adalah ' + highest + ' dan jumlah kemunculan sebanyak ' + countHighest + ' kali';

    return strResult;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''