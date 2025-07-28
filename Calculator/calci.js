let calculation = localStorage.getItem("calculation") || "";
document.querySelector(".screen").textContent = calculation;

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem("calculation", calculation);
  document.querySelector(".screen").textContent = calculation;
}

function calculate() {
  try {
    const result = eval(calculation); 
    calculation = result.toString();
    localStorage.setItem("calculation", calculation);
    document.querySelector(".screen").textContent = calculation;
  } catch (e) {
    console.log("Error in calculation");
    document.querySelector(".screen").textContent = "Error";
  }
}

function clearCalculation() {
  calculation = "";
  localStorage.removeItem("calculation");
  document.querySelector(".screen").textContent = "";
}
