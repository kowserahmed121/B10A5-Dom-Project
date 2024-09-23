function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputFloatValue = parseFloat(inputValue);
    return inputFloatValue;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textFloatValue = parseFloat(textValue);
    return textFloatValue;
}