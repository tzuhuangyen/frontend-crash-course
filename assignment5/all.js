console.log('hello yen');
// practice 1 calculate
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").value = result;
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").value = result;
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").value = result;
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").value = result;
  }

  //practice 2 to do list
  const toDoInpput = document.querySelector('.toDo-input');
  const addBtn =document.querySelector('.addBtn');
  const toDoLists = document.querySelector('.toDo-lists');

//   console.log(toDoInpput);



//practice 3 count down
//dom module
const s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 24,
    y = d * 365;

// setInterval(() => {
//     counting();
// }, 1000);


const formAddDate = document.getElementById('addDate');
formAddDate.addEventListener('submit', addTime);

function addTime(e) {
        const date = document.getElementById('date').value,
              time = document.getElementById('time').value,
              timeYears = document.getElementById('time-years'),
              timeDays = document.getElementById('time-days'),
              timeHours = document.getElementById('time-hours'),
              timeMinutes = document.getElementById('time-minutes'),
              timeSeconds = document.getElementById('time-seconds');

        if(date && time) {
            const chosenDte = new Date (`${date} ${time}`)
            document.getElementById('until').innerText = chosenDte.toString()

            const hidden = document.querySelectorAll('.hidden');
            hidden.forEach(el => el.style.display ='block');

            const interval = setInterval(() => {
                const pickedDate = new Date(`${date} ${time}`).getTime(),
                currentDate = new Date().getTime(),
                difference = pickedDate - currentDate,
                years = Math.floor(difference / y);
                if (difference <= 0) { // Check if the time is up
                    clearInterval(interval); // Clear the interval
                    timeYears.innerHTML = '0';
                    timeDays.innerHTML = '0';
                    timeHours.innerHTML = '0';
                    timeMinutes.innerHTML = '0';
                    timeSeconds.innerHTML = '0';
                    return; // Exit the setInterval function
                  }
                if (years < 1) {
                    timeYears.parentElement.style.display = 'none';
                } else {
                    timeYears.parentElement.style.display = 'block';
           
                }
             timeYears.innerHTML = Math.floor(difference / y);
             timeDays.innerHTML = Math.floor((difference % y) / d);
             timeHours.innerHTML = Math.floor((difference % d) / h);
             timeMinutes.innerHTML = Math.floor((difference % h) / m);
             timeSeconds.innerHTML = Math.floor((difference % m) / s);
            }, 1000);

            document.querySelector('.count-down-btn').addEventListener('click',()=>{
                clearInterval(interval);
            });
            formAddDate.reset();
;        }
e.preventDefault();
      }
    
   //4.guess number
   const winningNumber = Math.floor(Math.random() * 10) + 1; // Generate a random winning number between 1 and 10
 function guessNumber() {
  const guess = prompt('Guess a number between 1 and 10'); // Ask the user to guess a number
   if (guess == winningNumber) { // Check if the guess is correct
    alert('Congratulations! You guessed the correct number.'); // Tell the user they won
  } else if (guess < winningNumber) { // Check if the guess is too low
    alert(`Sorry, ${guess} is too low. Try again.`); // Tell the user their guess was too low and give them another chance
    guessNumber(); // Call the guessNumber function again to give the user another chance
  } else { // Otherwise, the guess must be too high
    alert(`Sorry, ${guess} is too high. Try again.`); // Tell the user their guess was too high and give them another chance
    guessNumber(); // Call the guessNumber function again to give the user another chance
  }
}
 guessNumber(); // Call the guessNumber function to start the game