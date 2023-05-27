// 2-1 建立一個名為person 的物件：
const person={
    name:"Yen",
    age:88,
    gender:"female",
}
console.log(`this is ${person.name},I am ${person.age} years old`);

// 2-2 在 person 添加一個名為 greet 的function。
//     調用 greet 方法時會顯示問候語'Hello'。
person.greet =function(){
    return "Hello"
}
console.log(person.greet());
// 2-3 在 person 中建立一個名為 friends 屬性並且打印出來。

person.friends=["Roy","Nell","jessic","tracy","Alu"];
console.log(`${person.greet}, this is ${person.name} and my friends names are ${person.friends}`);