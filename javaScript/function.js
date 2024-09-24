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

function showHistoryById(id){
    document.getElementById("main-container").classList.add("hidden");
    document.getElementById("history-container").classList.add("hidden")

    document.getElementById(id).classList.remove("hidden")
}