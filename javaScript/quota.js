document.getElementById("quota-btn").addEventListener("click", function () {
    const inputValue = getInputValueById("quota-input-flied");
    const textMoneyValue = getTextValueById("quota-total-amount");
    const totalMoneyValue = getTextValueById("total-amount");
  
    if (inputValue > 0 && !isNaN(inputValue)) {
      if (inputValue > totalMoneyValue) {
        alert("you need money");
        return;
      }
      const newbalance = totalMoneyValue - inputValue;
      document.getElementById("total-amount").innerText = newbalance;
  
      const feniBalance = textMoneyValue + inputValue;
      document.getElementById("quota-total-amount").innerText = feniBalance;

    //   add history document 
    const div = document.createElement("div");
    div.classList.add("border-2","p-6", "rounded-md", "space-y-4", "mt-4")
    div.innerHTML = `
    <h4 class="text-2xl">Donation Amount ${inputValue} for  quota movement, Bangladesh</h4>
    <p>${new Date()}</p>
    `
    document.getElementById("history-container").appendChild(div);
    } else {
      alert("not ok");
    }
  });
  