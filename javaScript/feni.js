document.getElementById("feni-btn").addEventListener("click", function () {
  const inputValue = getInputValueById("feni-input-flied");
  const textMoneyValue = getTextValueById("feni-total-amount");
  const totalMoneyValue = getTextValueById("total-amount");

  if (inputValue > 0 && !isNaN(inputValue)) {
    if (inputValue > totalMoneyValue) {
      alert("you need money");
      return;
    }
    const newbalance = totalMoneyValue - inputValue;
    document.getElementById("total-amount").innerText = newbalance;

    const feniBalance = textMoneyValue + inputValue;
    document.getElementById("feni-total-amount").innerText = feniBalance;
  } else {
    alert("not ok");
  }
});
