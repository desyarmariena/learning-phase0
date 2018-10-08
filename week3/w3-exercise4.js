/* 
Tantangan Array 3 - Menggunakan Built-in Function pada Array (Join, Split, Slice, Splice, Sort)
*/

//contoh output
//["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

/*Buatlah sebuah function dengan nama dataHandling2 
yang akan menerima input array seperti di atas. */

function dataHandling2(arr){

    /* Gunakan fungsi splice untuk memodifikasi variabel tersebut 
    agar menjadi seperti array dibawah 
    ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", 
    "21/05/1989", "Pria", "SMA Internasional Metro"]
    */
  
    arr.splice(2, 1, 'Provinsi Bandar Lampung');
    arr.push('Pria', 'SMA Internasional Metro');
    console.log(arr);
  
    /* Berdasarkan elemen yang berisikan tanggal/bulan/tahun 
    (elemen ke-4), ambil angka bulan dan console.log nama bulan 
    sesuai dengan angka tersebut. */

    var tanggal = arr[3].split('/');
    // var tanggalNumber = 
    // console.log(tanggal);
    switch(tanggal[1]){
      case '01': console.log('Januari'); break;
      case '02': console.log('Februari'); break;
      case '03': console.log('Maret'); break;
      case '04': console.log('April'); break;
      case '05': console.log('Mei'); break;
      case '06': console.log('Juni'); break;
      case '07': console.log('Juli'); break;
      case '08': console.log('Agustus'); break;
      case '09': console.log('September'); break;
      case '10': console.log('Oktober'); break;
      case '11': console.log('November'); break;
      default: console.log('Desember'); break;
    }

    /* Pada array hasil split dari tanggal/bulan/tahun, 
    lakukan sorting secara descending dan console.log 
    array yang sudah di-sort.*/
    
    var tanggalDesc = tanggal.slice();
    tanggalDesc.sort(function(a, b){return b-a});
    console.log(tanggalDesc);

    /* Masih pada array hasil split dari elemen tanggal/bulan/tahun, 
    gabungkan semua elemen menggunakan join dan pisahkan 
    dengan karakter strip (-) lalu console.log hasilnya. */

    var tanggalJoin = tanggal.join('-');
    console.log(tanggalJoin);

    /* Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. 
    Gunakan slice untuk menghapus kelebihan karakter dan 
    console.log nama yang sudah di-slice */
    
    var namaNew = arr[1].slice(0,15);
    console.log(namaNew);

  }
  
  var input = ["0001", "Roman Alamsyah", "Jakarta", "21/05/1989", "Membaca"];
  
  dataHandling2(input);
  