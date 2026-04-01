let age = parseFloat(prompt("输入你的年龄"));

if (age < 18) {
  alert("未成年");
} else if (age < 30) {
  alert("成年");
} else if (age < 40) {
  alert("而立");
} else if (age < 50) {
  alert("不惑");
} else {
  alert("老东西");
}
