function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputFloatValue = parseFloat(inputValue);
    return inputFloatValue;
}