module.exports = function getZerosCount(number, base) {


  /////////////////// 1. разложение base на простые множители /////////////////// +++++
  console.log('number: ', number);
  console.log('base: ', base);
  let baseTwo = base;
  let j = 0;
  let n = 2;
  let mnojiteli = new Array();
  do {
    if (baseTwo % n === 0) {
      mnojiteli[j] = n;
      j++;
      baseTwo = baseTwo / n;
    } else {
      n++;
    }
  } while (n < baseTwo);
  mnojiteli[j] = n;
  console.log('mnojiteli: ', mnojiteli);

  /////////////// 2. считаем одинаковые ///////////////////
  let result = [];
  for (let i=0; i < mnojiteli.length; i++) {
    if (mnojiteli[i] != mnojiteli[i-1]) {
      let odinak = 0;
      if (mnojiteli[i] == mnojiteli[i+1]) {
        odinak = 1;
        for (; mnojiteli[i] == mnojiteli[i+1]; i++) {
          odinak = odinak + 1;
        }
        console.log('odinak: ', odinak);
      }



      /////////////// 3. делим number на каждый уникальный множитель /////////////////// ЗДЕСЬ ОШИБКА
      let count = 0;
       for (let m = mnojiteli[i]; number/m > 1; m=m*mnojiteli[i]) {  // 0 поставил вместо 1
        count = count + Math.floor(number/m); 
        // 2 Варианта. либо math.floor отсекает не тогда когда надо, и теряем мелочи
        // либо забываем поделить еще раз, если делится. Хотя м=м*м разве так не делает?
        // 100/2 = 50, оно больше 1, каунт = 50, 2*
        // 
      }
      if (odinak !=0) {count = Math.floor(count/odinak);} // !!!!!!!!!
      
      result.push(count);

    }
  }
  console.log('result: ', result);
  
  //////// 4. ЗДЕСЬ Я ВЫБИРАЮ НАИМЕНЬШЕЕ ЗНАЧЕНИЕ ИЗ МАССИВА RESULT[......];
  let finalResult = result[0];
  for (i=0; i<result.length; i++) {
    if (i+1 < result.length && result[i+1] < result[i]) {
      finalResult = result[i+1];
      console.log('finalResult: ', finalResult);
    }
  }
  return finalResult;
  

}

//getZerosCount(70497638, 2);