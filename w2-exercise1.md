# 1. Newton Second Law

<!-- Buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2! -->

READ and SAVE 'massa benda'
READ and SAVE 'percepatan benda'
COMPUTE 'massa benda' multiply by 'percepatan benda'
SAVE previous computation result as 'resultan gaya'
PRINT 'resultan gaya'


# 2. Tahun Kabisat

<!-- Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

    Jika tahun habis di bagi 4 dan tidak habis di bagi 100, dan
    Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400 -->

READ and SAVE 'tahun'
SAVE 'jenis tahun' without any value
IF 'tahun' mod 4 EQUALS 0 and 'tahun' mod 100 EQUALS > 0
    PRINT 'TAHUN KABISAT'
ELSE IF 'tahun' mod 4 EQUALS 0 and 'tahun' mod 100 EQUALS 0 and 'tahun' mod 400 EQUALS 0
    PRINT 'TAHUN KABISAT'
ELSE
    PRINT 'BUKAN TAHUN KABISAT'


# 3. Laundry Day

<!-- Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci. -->

STORE 'laundry' with 0

WHILE 'laundry' < 20
    ADD 'laundry' by 1

PRINT 'Mesin cuci dinyalakan!'


# 4. Periksa Kuku

<!-- Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut. -->

STORE 'students' with 0

WHILE 'students' < 40
    IF 'kuku panjang'
        DO 'Hukum Siswa'
    ELSE
        DO 'Puji Siswa'
    ADD 'students' by 1
