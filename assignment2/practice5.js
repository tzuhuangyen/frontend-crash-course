const colors =["black", "blue", "yellow"]
// for (let i =0; i<colors.length;i++){
//     listColors.innerHTML+= `<li>${colors[i]}</li>`
// }
for(let i=0; i<colors.length;i++){
    const container=document.querySelector(".container")
    const ulTag = document.createElement("ul");
    const liTag =document.createElement("li");
    const liText =document.createTextNode(colors[i])
 
    container.appendChild(ulTag);
    ulTag.appendChild(liTag)
    liTag.appendChild(liText);
    
}

function addColor(){
    const liTag =document.createElement("li");
    const input = document.querySelector("#input");
    const liText =document.createTextNode(input.value)
    const ulTag=document.querySelector("ul")
    liTag.appendChild(liText);
    ulTag.appendChild(liTag);
    input.value="";
}