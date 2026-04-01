let account = "张三";
let password = "123456";

let input =
  prompt("please Input Your account and password, sperate with space")
    .split(' ');

if (account == input[0] && password == input[1]) {
  alert("AC");
} else {
  alert("WA");
}

