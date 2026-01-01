const display = document.getElementById("display");
const toggle = document.getElementById("themeToggle");
const body = document.body;

// INPUT TOMBOL
function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = display.value.replace('%', '/100');
        display.value = eval(result);
    } catch {
        display.value = "Error";
    }
}

// MODE GELAP / TERANG
toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    toggle.textContent = body.classList.contains("light") ? "🌙" : "☀️";
});

// KEYBOARD SUPPORT
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        append(key);
    } 
    else if (["+", "-", "*", "/"].includes(key)) {
        append(key);
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        deleteLast();
    } 
    else if (key === "Escape") {
        clearDisplay();
    } 
    else if (key === "%") {
        append("%");
    }
});
