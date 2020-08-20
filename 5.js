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
  let tResArr = []
  let resArr = []

  let tArr = []
  let num = 2
  let maxLen = 0

  for (let i = 4; i <= n; i++) {
    tResArr.push(getNum(i, num, tArr))
    
      if (tResArr[i - 4].length > maxLen) maxLen = tResArr[i - 4].length
    
    num = 2
    tArr = []
  }

  console.log(tResArr);

  for (let i = 0; i < maxLen; i++) {
    tArr = []
    for (let j = 0; j < tResArr.length; j++) {
      //  console.log(tResArr[j][i], i, j);
      if (tResArr[j][i]) {
        //console.log(tResArr[j][i])
        if (i > 0 && tResArr[j][i] > 4) {          
          continue
        }
        if (tArr.indexOf(tResArr[j][i]) == -1) {          
          tArr.push(tResArr[j][i])
        }
      }
    }
    console.log("tArr = ", tArr, );
    resArr = resArr.concat(tArr)
  }

  console.log("resArr = ", resArr);
  return resArr.reduce((mul, x) => mul * x)

}

//правильное решение, но не мое... :'( 
//232792560

function NOK(A)
{   
    let n = A.length
    let a = Math.abs(A[0])

    for (var i = 1; i < n; i++){ 

      let b = Math.abs(A[i])
      let c = a

       while (a && b){
          a > b ? a %= b : b %= a
          console.log(a, b)
      }
      a = Math.abs(c*A[i])/(a+b)
      //console.log(a)
     }
    return a
}
let tmpArr = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(NOK(tmpArr))

let a = 4
let b = 2
console.log(a && b)


//console.log(getDivide(20))
//console.log( getNum(10, num, arr) )