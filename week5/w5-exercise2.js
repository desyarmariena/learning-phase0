// Exercise 2 - Naik Angkot

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var arrHasil = [];
    for(var i = 0; i < arrPenumpang.length; i++){
        var obj = {};
        for(var j = 0; j < arrPenumpang[i].length; j++){
            obj.penumpang = arrPenumpang[i][0];
            obj.naikDari = arrPenumpang[i][1]; 
            obj.tujuan = arrPenumpang[i][2];
            obj.bayar = (rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari)) * 2000;
        }
        arrHasil.push(obj);
    }

    return arrHasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]