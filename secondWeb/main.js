const n = Math.floor((Math.random() * 100)) + 1;

function getNumber() {
  let s = prompt("请输入一个整数");
  return Number(s);
}

function guessNum() {
  for (let i = 1; i <= 10; ++i) {
    let inputNumber = getNumber();
    if (inputNumber > n) {
      alert("你猜的大了");
    } else if (inputNumber < n) {
      alert("你猜的小了");
    } else {
      alert("恭喜🎉猜对了");
      break;
    }
  }
}
