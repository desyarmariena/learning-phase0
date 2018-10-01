/* 
Tantangan Array 2 - Melakukan Looping Data Array

Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
*/

function dataHandling(data){
    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < data[i].length; j++){
        if(j === 0){
            console.log('Nomor ID:', data[i][j]);
        } else if(j === 1){
            console.log('Nama Lengkap:', data[i][j]);
        } else if(j === 2){
            console.log('TTL:', data[i][j], data[i][j+1]);
        } else if(j === data[i].length-1){
            console.log('Hobi:', data[i][j]);
        }
        }
        console.log(' ');
    }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

dataHandling(input);