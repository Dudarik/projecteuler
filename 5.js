// 2520 - самое маленькое число, которое делится без остатка 
// на все числа от 1 до 10.

// Какое самое маленькое число делится нацело на все числа от 1 до 20?
/*
function getNumDivide(n){
  let resArr = []
  let currentNum = 2

  if (n === 1) {
    resArr.push(1)
  }

  if (n % currentNum === 0){
    resArr.push(currentNum)
    n = n / currentNum

    getNumDivide(n)

  }else if (n % currentNum !==0){
    if (!(n <= currentNum)){
      currentNum++
      getNumDivide(n)
    }
  }
  return resArr
}

console.log( getNumDivide(10) )*/
  

function getNum(x, num, arr) {    
  if (x % num === 0) {
    arr.push(num);
    x = x / num;

    getNum(x, num, arr);

  } else if (x % num !== 0) {
    if (x >= num) {
      num++;
      getNum(x, num, arr);
    }
  }
  return arr
}

function getDivide(n) {
  let tResArr = [[2]]
  let resArr = []

  let tArr = []
  let num = 2
  let maxLen = 0

  for (let i = 2; i <= n; i++) {
    tResArr.push(getNum(i, num, tArr))
    if (tResArr[i - 1].length > maxLen)  maxLen = tResArr[i - 1].length
    num = 2
    tArr = []   
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < tResArr[i].length; j++) {      
      if ()
    }
    
  }


  console.log( resArr, maxLen )
  
}
getDivide(20)
//console.log( getNum(10, num, arr) )