---
sidebar_position: 3
---

# Ternary operator

```js
let num2:number = 2

const a = num1 < num2 ? 'red' : 'blue'
/** 
 * karena expresi pertama terpenuhi yaitu num1(1) < num2(2) akan bernilai true 
 * maka program akan mengeksekusi expresi kedua yaitu menampilkan red
 * */ 
console.log(a) 

const b = num1 > num2 ? 'red' : 'blue'
/** 
 * karena expresi pertama tidak terpenuhi yaitu num1(1) > num2(2) akan bernilai false 
 * maka program akan mengeksekusi expresi ketiga yaitu menampilkan blue
 * */ 
console.log(b)
```