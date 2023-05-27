// 3-1 用一些標籤創造簡易的HTML。
// 3-2 使用 getElementById 獲取元素並打印
const items = document.getElementById("items")
console.log(items);

// 3-3 使用 getElementsByClassName 獲取元素並打印所有元素。
const item =document.getElementsByClassName("item");
console.log(item);

// 3-4 使用 querySelector 獲得id並打印。
const logo =document.querySelector("#logo")
console.log(logo); 

// 3-5 使用 querySelector 獲得class並打印。
const otherItem =document.querySelector(".otherItem")
console.log(otherItem);

//3-6 使用 querySelectorAll 以class獲取所有元素並打印。
const allItems =document.querySelectorAll(".item")
console.log(allItems);