function loadData(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
          let modifiedString = xhttp.responseText;
          let part = modifiedString.replace(/,/g, "\n").replace(/Yes/g,"\n").replace(/[0-9]/g, "").replace(/(\r\n|\n|\r)/gm,"").replace("DateRequires accessibility accommodationRequires captionsRequires session to be recordedRequires transcriptionAnything elseSpecific Requests","").replace(/\/\//g,"").replace("\"", "\n\n").replace(/(\.)/gm,"\.\n");
          part = part.split("\n");
          var testArr = [];
          var a = '<ul>';
          var b = '</ul>';
          var reportBtnn = document.createElement("button");

      if (this.readyState == 4 && this.status == 200) {
         for (let i = 0; i < part.length - 1; i++) {

            console.log(part[2]);
            let btn = document.createElement("button");
            btn.value= "Report";
            btn.type = "report";
            btn.name = "formBtn" + String(i);
            console.log(btn.name);
            testArr[i] = document.createElement("li");
            const textNode = document.createTextNode(part[i]);
            testArr[i].appendChild(textNode);
            testArr[i].appendChild(btn);
            const str = "<li>" + part[i] + " " + "<button id=btn-dyn-" + i + ">" + "Add" + "</button>" + "</li>";
            testArr[i] = str;
            console.log(testArr[i]);
          }
          const ul = document.createElement("ul");
          ul.innerHTML = testArr;
          document.getElementById("display").innerHTML = testArr;
          for (let i = 0; i < part.length - 1; i += 1){
            document.getElementById("btn-dyn-" + i).addEventListener('click', function(){
              alert(part[i]);
            })
          }
         console.log()

         console.log("test");
      } else {
        console.log("error")
      }
  };
  xhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyB9PIwvJ2FyO8GRs1ESp3FjFn7fwrn3eLKZ5gelYuYtDkJ4xjicLCQ3mE27s03PUuZck4dEH0EPI9/pub?gid=0&single=true&output=csv");
  xhttp.send();
  }

  document.getElementsByClassName("data").addEventListener("click", loadData());

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



chrome.browserAction.onClicked.addListener(function(tab) {
  let button = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe ybrnEd')[0];
  button.addEventListener('click', () => {
    console.log('clicked');
    });
});
