let name = 'xiaoming'
let age = 18
let flag = true
function sum(num1, num2){
  return num1 + num2
}
if(flag){
  console.log(sum(22, 22));
}
//导出方式一
export {
  flag,
  sum
}
//导出方式二
export let num1 = 111;
export let height = 1.88
//导出方式三：导出函数或类
export function mul(num1, num2){
  return num1 + num2
}
export class person {
  run(){
    console.log('在奔跑');
  }
}
//导出方式四，导入时不需要在同名，导出时只能有一个默认导出的对象
let address = 'beijin'
//export default address
export default function (argument){//默认导出函数时可以不用取函数名
  console.log();
}
//import addr from "./a";
//特殊导入方式：统一全部导入
import * as aaa from './a.js'//导入的对象全部存在aaa里面
console.log(aaa.flag);//在aaa里面取出某个变量

