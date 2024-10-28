// 聲明一個不可改變的常數
const age: number = 25;

// 嘗試更改常數的值（這將導致錯誤）
//age = 30; // Error: Cannot assign to 'age' because it is a constant.

// 聲明一個可以改變的變數
let username : string = "Alice"

// 更改變數的值
username = "Bob";

console.log(`Age: ${age}`);
console.log(`Name: ${username}`);