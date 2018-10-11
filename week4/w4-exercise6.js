// Exercise 6 - Hitung Huruf

/* Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. */

//BELUM SELESAI
function hitungHuruf(kata) {
    // you can only write your code here!
    var perKata = kata.split(' ');
    var perulanganKata = [];    
    
    // loop per kata
    for(var i = 0; i < perKata.length; i++){

        //hitung kemunculan karakter dalam setiap kata
        var perulangan = {};
        for(var j = 0; j < perKata[i].length; j++){

            //cek key dalam object
            if( perulangan[perKata[i][j]] === undefined ){
                perulangan[perKata[i][j]] = 1;
            } else {
                perulangan[perKata[i][j]] += 1;
            }            
        }
        perulanganKata.push(perulangan);   
    }

    var resultKata = perKata[0];        
    var totalMaxChar = 0; //total karakter yang muncul terbanyak dalam satu kata
    
    for(var i = 0; i < perulanganKata.length; i++){
        var countMaxChar = 1; //jumlah karakter yang muncul terbanyak        

        //loop cari karakter yang muncul terbanyak    
        for (var char in perulanganKata[i]) {
            if(perulanganKata[i][char] > countMaxChar){
                countMaxChar = perulanganKata[i][char]
            }         
        }
        
        var totalMaxChar2 = 0;
        //hitung total karakter terbanyak muncul
        for (var char in perulanganKata[i]){
            if(perulanganKata[i][char] === countMaxChar && countMaxChar !== 1){
                totalMaxChar2 += countMaxChar;
            }
        }
        if(totalMaxChar2 > totalMaxChar){
            totalMaxChar = totalMaxChar2;
            resultKata = perKata[i];
        }        
    }
    
    return resultKata;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau