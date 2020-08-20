var inputNum = document.getElementById('inputNum'),
  output = document.querySelector('.output');


class SetNum {
  constructor() {
    this.arr = [];
    this.num = 2;
  }
  getNum(x) {
    console.log(x)
    if (x === '1') {
      this.arr.push(1);
    }
    if (x % this.num === 0) {
      this.arr.push(this.num);
      x = x / this.num;

      this.getNum(x);

    } else if (x % this.num !== 0) {
      if (!(x <= this.num)) {
        this.num++;
        this.getNum(x);
      }
    }
    output.innerHTML = "Simple number(s): " + this.arr.join(' * ');
  }
}


inputNum.addEventListener('input', function () {
  output.innerHTML = "";
  var sN = new SetNum();
  sN.getNum(inputNum.value);
});