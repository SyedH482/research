function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
            // console.log(xhttp.responseText)
            // console.log(typeof xhttp.responseText);
            let modifiedString = xhttp.responseText;
            let part = modifiedString.replace(/,/g, "\n").replace(/Yes/g,"\n").replace(/[0-9]/g, "").replace(/(\r\n|\n|\r)/gm,"").replace("DateRequires accessibility accommodationRequires captionsRequires session to be recordedRequires transcriptionAnything elseSpecific Requests","").replace(/\/\//g,"").replace("\"", "\n\n").replace(/(\.)/gm,"\.\n");
            // let partOne = test.replace(/(\.)/gm,"\.\n");
            // part = part.split(".");
            part = part.split("\n");
            // console.log(test);
            var testArr = [];
            var a = '<ul>';
            var b = '</ul>';
            var reportBtnn = document.createElement("button");
  
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           for (let i = 0; i < part.length - 1; i++) {
            // if (test[i] == "."){
            //   test[i] += "\n";
            // part.forEach(element => {
              console.log(part[2]);
              let btn = document.createElement("button");
              // btn.onclick = alertFunc;
              btn.value= "Report";
              btn.type = "report";
              btn.name = "formBtn" + String(i);
              console.log(btn.name);
              // btnHolder = document.body.appendChild(btn);
              // console.log(btnHolder);
            // // });
            //   testArr[i] = '<li>' + part[i] + '</li>';
              testArr[i] = document.createElement("li");
              const textNode = document.createTextNode(part[i]);
              testArr[i].appendChild(textNode);
              testArr[i].appendChild(btn);
              const str = "<li>" + part[i] + " " + "<button id=btn-dyn-" + i + ">" + "Add" + "</button>" + "</li>";
              testArr[i] = str;
              // btnHolder[i].addEventListener("click", console.log("poe"));
              // testArr[i] = testArr[i].replaceAll(',', " ");
              // document.getElementById("rep").addEventListener("click", alertFuncOne);
              console.log(testArr[i]);
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
              })
            }
          // }
           console.log()
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
  