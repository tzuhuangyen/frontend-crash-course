 //counter
 const number=document.querySelector('#number');
 const add=document.querySelector('.add');
 const min =document.querySelector('.min');
 const reset =document.querySelector('.reset')
 add.addEventListener('click',()=>{
     number.value++
 })
 min.addEventListener('click',()=>{
     number.value--
 })
 reset.addEventListener('click',()=>{
     number.value=0
 })
