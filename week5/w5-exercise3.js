// Exercise 3 - Highest Score

// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

function highestScore (students) {
    // Code disini
    var objResult = {};

    for(var i = 0; i < students.length; i++){
        //cek jika key sudah ada atau belum
        if(objResult[students[i].class] === undefined){
            objResult[students[i].class] = { name: students[i].name, score: students[i].score };
        }
        // cek jika score dari students lebih besar
        if(students[i].score > objResult[students[i].class].score){
          objResult[students[i].class].name = students[i].name;
          objResult[students[i].class].score = students[i].score;
        }
    }
    return objResult;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}