var name = 'xiaoming'
var age = 18
function sum(num1, num2){
  return num1 + num2
}
var flag = true
if(flag){
  console.log(sum(11, 11));
}
//在此处没有低层支撑无法运行，后面在node里面就可以解析
module.exports = {
  flag,
  sum
}