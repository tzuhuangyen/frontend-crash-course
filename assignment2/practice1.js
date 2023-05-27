//1-1 宣告 fruits 陣列，並新增水果累別
const fruits =["pear","mango","straberry","apple","passionfruit"]
//1-2 打印出 fruits 的每個元素。
console.log(fruits);
//1-3 將第三個水果改為 Durian 並打印 fruits。
fruits.splice(2,1,"Durian")
console.log(fruits)

// 1-4 使用 push 方法將兩個水果添加到數組中。
fruits.push("tomato","berrys")
console.log(fruits);

// 1-5 從陣列中刪除第一個水果。
fruits.splice(0,1)
console.log(fruits);

// 1-6 使用 for, while 循環打印 fruits 數組中的元素。
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}
// 1-7 宣告名為 numbers 的陣列，並使用 map 將每個元素設為其平方。
const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];
const squareNums=numbers.map((num=>{
    return num*num
}))
console.log(squareNums);

// 1-8 使用 filter 過濾質數。
const filterNums=numbers.filter((num)=>{
    if(num>1){
        let isPrime =true;
        for(let a=2; a<=Math.sqrt(num);a++){
            if(num%a===0){
                isPrime=false;
            }
        }
        if(isPrime){
            return num
        }
    }
})
console.log(filterNums);

//1-9 使用 reduce 計算元素的總和。
const sum=numbers.reduce((acu,num)=>{
    return acu+num
},0);
console.log(sum);