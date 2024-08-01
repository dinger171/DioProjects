var result;

function calc() {
  const num = document.getElementById("numput").value;
  const dropinput = parseFloat(document.getElementById("dropinput").value);
  const expression = num.split("").join("+");
  document.getElementById("exposition").innerHTML = "expression:  " + expression;

  // Calculate the result
  result = eval(expression);
  document.getElementById("result").innerHTML = "result:  " + result;

  // Check if result is divisible by dropinput
  if (result % dropinput === 0) {
    document.getElementById(
      "drop"
    ).innerHTML = `<span class="green">Yes, divisible by ${dropinput}</span>`;
  } else {
    document.getElementById(
      "drop"
    ).innerHTML = `<span class="red">No, not divisible by ${dropinput}</span>`;
  }
}

// Add event listeners to call calc when inputs change
document.getElementById("numput").addEventListener("input", calc);
document.getElementById("dropinput").addEventListener("input", calc);

// Initial calculation
calc();

