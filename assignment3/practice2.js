// const actBtn =document.querySelector('.actBtn');
// actBtn.addEventListener('click',()=>{
//     getActive();
// })
const getActive=()=>{
    fetch('https://www.boredapi.com/api/activity')
    .then(function(res){
        return res.json();
    })
    .then(data=>{
           document.querySelector('.suggest-list').textContent=data.activity
        })
}

const guessBtn = document.querySelector('.guessBtn');
guessBtn.addEventListener('click',()=>{
    getAge();
})
const nameInput = document.querySelector('#name')
const getAge=()=>{
    let name =nameInput.value;
        fetch(`https://api.agify.io/?name=${name}`)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            console.log(res);
            document.querySelector('.age-list').textContent=`${name} is ${res.age} years old`
        }
            
            // document.querySelector('.age-list').textContent=`${data.age}years old`
        )
    }