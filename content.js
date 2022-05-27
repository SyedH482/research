var counter = 0;

function alertFuncOne(){
    alert("Please keep chatting in the window to a minimum. Classmates who are DHH may have trouble splitting their attention between the chat window and the classroom discussion");
}
  document.getElementById("rep").addEventListener("click", alertFuncOne);
  
function alertFuncTwo(){
  alert("Please remember to turn on your captions.");
}
document.getElementById("repOne").addEventListener("click", alertFuncTwo);

function alertFuncThree(){
    alert("Stay muted when not speaking to not give off background noise.");
}
  document.getElementById("repTwo").addEventListener("click", alertFuncThree);
  
function alertFuncFour(){
  alert("Be mindful and aware of the chat");
}document.getElementById("repThree").addEventListener("click", alertFuncFour);

function alertFuncFive(){
    alert("Please dont speak to the interpreter, speak directly to the student.");
}
  document.getElementById("repFour").addEventListener("click", alertFuncFive);
  
function alertFuncSix(){
  alert("Overall, make this an inclusive space for everyone and be understanding of other's needs.");
  counter++;
  if (counter == 3){
  document.getElementById("repFiv").style["background-color"] = "red";
  }
}
document.getElementById("repFive").addEventListener("click", alertFuncSix);

function alertFuncSeven(){
    alert("Reminder, please pay attention to your classmates accessibility needs!.");    
  }


  document.getElementById("repSix").addEventListener("click", alertFuncSeven);


// setTimeout(() => { alert("Please turn on your captions!"); }, 2000);

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function demo() {
//     console.log('Taking a break...');
//     await sleep(1000);
//     console.log('Two seconds later, showing sleep in a loop...');
  
//     // Sleep in loop
//     for (let i = 0; i <= 1; i++) {
//         alert("Please turn on your captions!");
//         await sleep(100000);
//         // console.log(i);
//     }
//   }
  
//   demo();
  
//   function makeButtons(){
//     var arr = ["test", "testing"];




//   }

// makeButtons();