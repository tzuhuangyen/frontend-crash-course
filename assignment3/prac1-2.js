 //to do list
 const text = document.querySelector('#text')
 const addToDo =document.querySelector('#addToDo')
 const listDisplay =document.querySelector('.listDisplay')
 const cleanAllToDo=document.querySelector('#cleanAllToDo')
 let list=[];
 const updateTodoList=()=>{
     listDisplay.innerHTML='';
     list.forEach((e,index) => {
         const html =
         ` <div class="list">
             <div class="title">${e}</div>
             <div class="deleteToDo" onclick="deleteToDo(${index})">x</div>
         </div>`
         listDisplay.innerHTML += html;
     })
 }

 addToDo.addEventListener('click',()=>{
     if(text.value !==''){
         list.push(text.value)
         updateTodoList()
         text.value=''
     }
 })
 
 const deleteToDo=(index) => {
  list.splice(index,1)
  updateTodoList()
 }

 cleanAllToDo.addEventListener('click',()=>{
     list=[]
     updateTodoList()
 })