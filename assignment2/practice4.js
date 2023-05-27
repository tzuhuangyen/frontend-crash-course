// 4-1 創建一個簡單的 HTML 。
// 4-2 創建一個內容為「My first DOM created.」的 p 標籤並放入 container 。
const pTag = document.createElement("p");
const pText = document.createTextNode("My first DOM created.");
pTag.appendChild(pText)

const container =document.querySelector(".container")
container.appendChild(pTag)
// 4-3 創建一個 ul 標籤。
const listColors =document.querySelector(".listColors")
// 4-4 使用 for 迴圈將三個 li(red, blue, yellow) 加入 ul 標籤中。
const colors =["black", "blue", "yellow"]
// for (let i =0; i<colors.length;i++){
//     listColors.innerHTML+= `<li>${colors[i]}</li>`
// }
for(let i=0; i<colors.length;i++){
    const liTag =document.createElement("li");
    const liText =document.createTextNode(colors[i])
    liTag.appendChild(liText);
    const ulTag =document.querySelector("ul")
    ulTag.appendChild(liTag)
}