function loadData(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
          // var modifiedString = "";
          // console.log(xhttp.responseText)
          // console.log(typeof xhttp.responseText);
          var modifiedString = xhttp.responseText;
          console.log(modifiedString + "modified string");
          let partOne = modifiedString.replace(/,/g, "\\n").replace(/Yes/g,"").replace(/[0-9]/g, "").replace(/(\r\n|\n|\r)/gm,"").replace("Date","").replace("Requires accessibility accommodation", "").replace("Requires captions", "").replace("Requires session to be recorded", "").replace("Requires session to be recorded", "").replace("Requires transcription", "").replace("Anything else", "").replace("Specific Requests", "").replace(/\/\//g,"").replace("\"", "\n\n").replace(/(\.)/gm,"\.\n");
          // let partTwo = partOne.replace(/(\.)/gm,"\.\\n");
          // part = part.split(".");
          part = partOne.split("\\n");
          // part = partOne;
          console.log(part + "part");
          var testArr = [];
          var a = '<ul>';
          var b = '</ul>';
          var reportBtnn = document.createElement("button");

      if (this.readyState == 4 && this.status == 200) {
        console.log("we are inside readyState")
         // Typical action to be performed when the document is ready:
         for (let i = 0; i < part.length; i++) {
          // if (test[i] == "."){
          //   test[i] += "\n";
          // part.forEach(element => {
            let btn = document.createElement("button");
            // btn.onclick = alertFunc;
            btn.value= "Add";
            btn.type = "Add";
            btn.name = "Add" + String(i);
            console.log(btn.name);
            // btnHolder = document.body.appendChild(btn);
            // console.log(btnHolder);
          // // });
          //   testArr[i] = '<li>' + part[i] + '</li>';
            testArr[i] = document.createElement("li");
            var textNode = document.createTextNode(part[i]);
            testArr[i].appendChild(textNode);
            testArr[i].appendChild(btn);
            console.log(part[i] + "this is part i");
            var str = "<li>" + part[i] + " " + "<button text-align='right' class='fa fa-check' id=btn-dyn-" + i + ">" + "" + "</button>" + "<button text-align='right' class='fa fa-times' id=btn-dyn-ex" + i + ">" + "</button>" +  " </li>";
            testArr[i] = str;
            // btnHolder[i].addEventListener("click", console.log("poe"));
            // testArr[i] = testArr[i].replaceAll(',', " ");
            // document.getElementById("rep").addEventListener("click", alertFuncOne);
            // reportBtnn.innerHTML = "Report";
          }
          // testArrStr = testArr.toString();
          // testArrStrOne = testArrStr.replace(/,/g, '');
          const ul = document.createElement("ul");
          ul.innerHTML = testArr;
          document.getElementById("display").innerHTML = testArr;
          for (let i = 0; i < part.length - 1; i += 1){
            document.getElementById("btn-dyn-" + i).addEventListener('click', function(){
              alert(part[i]);
              var sheetData = part[i];
              const j = document.createElement("form");
              j.setAttribute('type', "text");
              j.setAttribute('name',"test");
              j.appendChild(document.createTextNode(sheetData));
              document.body.appendChild(j);
              console.log(j);
              console.log(sheetData + "this is sheetdata");
            })
          }
        // }
         console.log(part[2] + " this is index 2");
        //  document.getElementById("display").innerHTML = part;
        //  alert(part);
         console.log("test");
      } else {
        console.log("error")
      }
  };
  xhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vQyB9PIwvJ2FyO8GRs1ESp3FjFn7fwrn3eLKZ5gelYuYtDkJ4xjicLCQ3mE27s03PUuZck4dEH0EPI9/pub?gid=0&single=true&output=csv");
  //   xmlhttp=new XMLHttpRequest();", true);
  xhttp.send();
  }

  document.getElementsByClassName("data").addEventListener("click", loadData());

  let interval = setInterval(loadData(), 5000);

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
