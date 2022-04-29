
// document.getElementById("etiquetteBtn").onclick = function () {
//   location.href = "form.html";
// };

// let userResponse = ["Syed needs a life"];

// function addResponses(){
//   let template = userResponse.map(user => `<li>${user}</li>`).join('\n')
//   document.getElementById('display').innerHTML = template;
// }

// addResponses();


// let responseVal = document.querySelector('message0');
// let btnAdd = document.querySelector('btn');

// btnAdd.addEventListener('click', () => {
//   userResponse.push(responseVal.value);
//   responseVal.value= '';
//   addResponses();
//   console.log(userResponse);
// })

// console.log(userResponse);

// let responseOne = document.querySelector("one");
// alert(responseOne);

// let btnAdd = document.querySelector("rep");


// btnAdd.addEventListener("click", () => 
// {
//    alert("button was clicked");
//    alert(responseOne);
//    console.log("i am");
// })

// Element.addEventListener("click", () => {

// })

// alert("Testing 123");


// function alertFunc(){
//   alert("Please keep chatting in the window to a minimum. Classmates who are DHH may have trouble splitting their attention between the chat window and the classroom discussion");
// }
// document.getElementById("rep").addEventListener("click", alertFunc);

// document.getElementByClassName("rep").addEventListener("click", () =>alertFunc());
// document.getElementsByClassName("rep").addEventListener("click", alertFunc);
// console.log(document.getElementById("rep"));

// let button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe ybrnEd')[0];
// button.addEventListener('click', () => {
//   console.log('clicked');
//   });
// document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe ybrnEd').addEventListener("click", alertFunc);


// const button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe Qr8aE')[0];
// console.log(button);
//   button.addEventListener('click', () => {
//   console.log('clicked');
//   });


// alert("Reminder: Please turn on your captions after joining a meeting!");

// const button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe Qr8aE')[0];
//   button.addEventListener('click', () => {
//   console.log('clicked');
//   });

// function loadData() {
//     var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQyB9PIwvJ2FyO8GRs1ESp3FjFn7fwrn3eLKZ5gelYuYtDkJ4xjicLCQ3mE27s03PUuZck4dEH0EPI9/pub?gid=0&single=true&output=tsv";
//     xmlhttp=new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//       if(xmlhttp.readyState == 4 && xmlhttp.status==200){
//         document.getElementById("display").innerHTML = xmlhttp.responseText;
//         console.log("I reached the button");
//         alert('testing 123');
//       }
//     };
//     xmlhttp.open("GET",url,true);
//     xmlhttp.send(null);
//   }

// currently only works when injecting into console attempting to debug

// window.onload=function(){
//   // -- put your code here

// const button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe Qr8aE')[0];
//   button.addEventListener('click', () => {
//   console.log('clicked');
//   });
// }

// alert("Reminder: Please turn on your captions after joining a meeting!");

// const button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe Qr8aE')[0];
// button.addEventListener('DOMContentLoaded', function () {
//   // const button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe Qr8aE')[0];
//   button.addEventListener('click', () => {
//   console.log('clicked');
//   });
// });


// function loadData() {
//   var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQyB9PIwvJ2FyO8GRs1ESp3FjFn7fwrn3eLKZ5gelYuYtDkJ4xjicLCQ3mE27s03PUuZck4dEH0EPI9/pub?gid=0&single=true&output=csv";
//   xmlhttp=new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if(xmlhttp.readyState == 4 && xmlhttp.status==200){
//       document.getElementById("display").innerHTML = xmlhttp.responseText;
//       alert(xmlhttp.responseText);
//       // console.log('tu madre')
//     }
//   };
//   xmlhttp.open("GET",url,true);
//   xmlhttp.send(null);
// }

// const url = chrome.runtime.getURL('test.txt');

// fetch(url)
//     .then((response) => {response.json()}) //assuming file contains json
//     .then((json) => doSomething(json));   

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null)   ;
// }   
   
// let saveFile = () => {   
    	   
//   // Get the data from    each element on the form.
// const question1 = document.getElementById('question1');
//   const question2 = document.getElementById('question2');
//   const question3 = document.getElementById('question3');
//   const question4 = document.getElementById('question4');
//   const msg = document.getElementById('message0');
  
//   // This variable stores all the data.
//   let data = 
//       '\r Response 1: ' + question1.value + ' \r\n ' + 
//       'Response 2: ' +question2.value + ' \r\n ' + 
//       'Response 3: ' + question3.value + ' \r\n ' + 
//       'Response 4: ' + question4.value + ' \r\n ' + 
//       'Response 5: ' + msg.value;
  
//   // Convert the text to BLOB.
//   const textToBLOB = new Blob([data], { type: 'text/plain' });
//   const sFileName = 'formDataTest.txt';	   // The file to save the data.

//   let newLink = document.createElement("a");
//   newLink.download = sFileName;

//   if (window.webkitURL != null) {
//       newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//   }
//   else {
//       newLink.href = window.URL.createObjectURL(textToBLOB);
//       newLink.style.display = "none";
//       document.body.appendChild(newLink);
//   }

//   newLink.click(); 
// }

// let saveContent = () => {
//   let data = 
//   '\r Name: ' + question1.value + ' \r\n ' + 
//   'Age: ' +question2.value + ' \r\n ' + 
//   'Email: ' + question3.value + ' \r\n ' + 
//   'Country: ' + quest.value + ' \r\n ' + 
//   'Message: ' + msg.value;

//   // Convert the text to BLOB.
//   const textToBLOB = new Blob([data], { type: 'text/plain' });
//   const sFileName = 'formData.txt';	   // The file to save the data.
//   var url = URL.createObjectURL(textToBLOB);
//   chrome.downloads.download({
//     url: url,
//     fileName: sFileName
//   });

// }
// function exportToFile() {
//   var myString = "Lorem ipsum.";

//   window.open('data:text/csv;charset=utf-8,' + escape(myString));
// }
// exportToFile();

// function exportInputs() {
//   downloadFileFromText('inputs.ini','dummy content!!')
// }

// function downloadFileFromText(filename, content) {
//   var a = document.createElement('a');
//   var blob = new Blob([ content ], {type : "text/plain;charset=UTF-8"});
//   a.href = window.URL.createObjectURL(blob);
//   a.download = filename;
//   a.style.display = 'none';
//   document.body.appendChild(a);
//   a.click(); //this is probably the key - simulating a click on a download link
// }

// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//             console.log(xhttp.responseText)
//             console.log(typeof xhttp.responseText);
//             let modifiedString = xhttp.responseText;
//             let part = modifiedString.replace(/,/g, "\n").replace(/Yes/g,"\n").replace(/[0-9]/g, "").replace(/(\r\n|\n|\r)/gm,"").replace("DateRequires accessibility accommodationRequires captionsRequires session to be recordedRequires transcriptionAnything elseSpecific Requests","").replace(/\/\//g,"").replace("\"", "\n\n");
//         if (this.readyState == 4 && this.status == 200) {
//            // Typical action to be performed when the document is ready:
//            document.getElementById("display").innerHTML = part;
//            alert(part);
//            console.log("test");
//         } else {
//           console.log("error")
//         }
//     };
//     xhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyB9PIwvJ2FyO8GRs1ESp3FjFn7fwrn3eLKZ5gelYuYtDkJ4xjicLCQ3mE27s03PUuZck4dEH0EPI9/pub?gid=0&single=true&output=csv");
//     //   xmlhttp=new XMLHttpRequest();", true);
//     xhttp.send();
//     }
  
//     document.getElementsByClassName("data").addEventListener("click", loadData());

// let button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe ybrnEd')[0];
// button.addEventListener('click', () => {
//   console.log('clicked');
//   });
