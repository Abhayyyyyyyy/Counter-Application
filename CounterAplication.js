let counterEl = document.getElementById("counterValue");

function onIncrement() {
    let previousCounterValue = counterEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    counterEl.textContent = updatedCounterValue;
    if (counterEl.textContent > 0) {
        counterEl.style.color = "green";
    } else if (counterEl.textContent < 0) {
        counterEl.style.color = "Red";
    } else {
        counterEl.style.color = "Black";
    }
}

function onDecrement() {
    let previousCounterValue = counterEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    counterEl.textContent = updatedCounterValue;
    if (counterEl.textContent > 0) {
        counterEl.style.color = "green";
    } else if (counterEl.textContent < 0) {
        counterEl.style.color = "Red";
    } else {
        counterEl.style.color = "Black";
    }
}

function onReset() {
    let updatedCounterValue = 0;
    counterEl.textContent = updatedCounterValue;
    counterEl.style.color = "Black";
}