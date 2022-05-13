// this file is used to add the admin page to the admin menu

let btn = document.getElementById('adminBtn');

let textArea = document.getElementById('adminLog');

// this is an event listener that adds the admin page to the admin menu
btn.addEventListener('click', () => {
    console.log(btn);
    console.log(textArea);
    if(textArea.style.opacity == 0){
        textArea.style.opacity = 1;
        console.log(textArea.style.opacity);
        var inputText = document.getElementById("adminLog").value;

    }else{
        console.log(textArea.style.display);
    }
});

var adminPage = document.getElementById('adminPage');
// this checks if the password is correct
textArea.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var inputText = document.getElementById("adminLog").value;

        inputTextOne = inputText.replace(/\s/g, '');
        if(inputTextOne === "testpassword"){
            adminPage.style.opacity = '1';
        }
    }
});
