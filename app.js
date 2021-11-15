const calculateBtn = document.querySelector("#calc-button");
const resetBtn = document.querySelector("#reset-button");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");
const result = document.querySelector("#result");

const resetInputs = () => {
  heightInput.value = "";
  weightInput.value = "";
  result.innerHTML = "";
};

const calculateBmi = () => {
  const height = heightInput.value;
  const weight = weightInput.value;

  const bmi = weight / (height * height);

  if (isNaN(bmi)) {
    alert("Please enter a valid number");
    return;
  }

  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
    <ion-card-header>
      <ion-card-title>
        Your BMI is ${bmi.toFixed(2)} 
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>
        ${
          bmi < 18.5
            ? "Underweight"
            : bmi < 25
            ? "Normal"
            : bmi < 30
            ? "Overweight"
            : "Obese"
        } 
      </p>
    </ion-card-content>
  `;

  result.appendChild(resultElement);
};

calculateBtn.addEventListener("click", calculateBmi);
resetBtn.addEventListener("click", resetInputs);
