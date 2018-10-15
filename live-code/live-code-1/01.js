/*
 Buatlah sebuah algoritma atau pseudocode untuk menghitung tarif tol dengan ketentuan sebagai berikut
  1. Tol dalamkota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 9.500,00
    - bus, trek, mobilbox Rp. 11.000,00
    - trek gandeng Rp. 15.000,00
  2. Tol antar kota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 11.500,00
    - bus, trek, mobilbox Rp. 13.000,00
    - trek gandeng Rp. 18.000,00
*/

STORE 'jenisTol' with any value
STORE 'tipeMobil' with any value
STORE 'tarifTol' with 0

IF 'jenisTol' EQUALS TO 'dalamkota'
  IF 'tipeMobil' EQUALS TO 'sedan' or 'minibus' or 'van'
    STORE 9500 to 'tarifTol'
  ELSE IF 'tipeMobil' EQUALS TO 'bus' or 'trek' or 'mobilbox'
    STORE 11000 to 'tarifTol'
  ELSE
    STORE 15000 TO 'tarifTol'
ELSE IF 'jenisTol' EQUALS TO 'antarkota'
  IF 'tipeMobil' EQUALS TO 'sedan' or 'minibus' or 'van'
    STORE 11500 TO 'tarifTol'
  ELSE IF 'tipeMobil' EQUALS TO 'bus' or 'trek' or 'mobilbox'
    STORE 13000 TO 'tarifTol'
  ELSE 
    STORE 18000 TO 'tarifTol'