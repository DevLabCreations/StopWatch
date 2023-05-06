// Function to convert miles to kilometers
function milesToKm(miles) {
    return miles * 1.60934;
}

// Function to convert kilometers to miles
function kmToMiles(km) {
    return km / 1.60934;
}

// Function to convert inches to centimeters
function inchesToCm(inches) {
    return inches * 2.54;
}

// Function to convert centimeters to inches
function cmToInches(cm) {
    return cm / 2.54;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get input values
    const miles = Number(document.getElementById("miles").value);
    const km = Number(document.getElementById("km").value);
    const inches = Number(document.getElementById("inches").value);

    // Convert values
    const kmResult = milesToKm(miles);
    const milesResult = kmToMiles(km);
    const cmResult = inchesToCm(inches);
    const inchesResult = cmToInches(cmResult);

    // Output results
    document.getElementById("output").innerHTML = `
        <p>${miles} miles is ${kmResult.toFixed(2)} kilometers</p>
        <p>${km} kilometers is ${milesResult.toFixed(2)} miles</p>
        <p>${inches} inches is ${cmResult.toFixed(2)} centimeters</p>
        <p>${cmResult.toFixed(2)} centimeters is ${inchesResult.toFixed(2)} inches</p>
    `;
}

// Attach event listener to form submit
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
