document.addEventListener("DOMContentLoaded", function () {
    var calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateBMI);
});

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Mohon masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    var bmi = weight / Math.pow(height / 100, 2);
    var status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }
    
    document.getElementById("result").textContent = bmi.toFixed(2);
    
    var statusContainer = document.getElementById('status-container');
            var statusElement = document.getElementById('status');
            statusElement.textContent = status;
            statusContainer.style.display = 'block';
}