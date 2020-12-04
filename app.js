var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");




function clickHandler () {
    txtOutput.innerText = "shdgaksadkjdkfl " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler)