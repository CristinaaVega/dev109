document.getElementById("FirstName").addEventListener('blur', firstName, false);
document.getElementById("LastName").addEventListener('blur', lastName, false);
document.getElementById("email").addEventListener('blur', validateEmail, false);
document.getElementById("phone").addEventListener('blur', validatePhone, false);
document.getElementById("username").addEventListener('blur', validateUsername, false);
document.getElementById("password").addEventListener('blur', validatePassword, false);
document.getElementById("zipcode").addEventListener('blur', validateZipCode, false);

document.getElementById("myform").addEventListener("submit", function(event) {
    if (!isValid()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function isValid() {
    let valid = firstName() && lastName() && validateEmail() && validatePhone() && validateUsername() && validatePassword() && validateZipCode();
    
    if (!valid) {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
    }
    return valid;
}

function firstName() {
    let firstname = document.getElementById("FirstName").value;
    let errorMessages = "";
    if (!firstname || firstname.length > 20 || !/^[a-zA-Z ,.'-]+$/.test(firstname)) {
        errorMessages = "<p>Invalid first name. Must be letters only (max 20 characters).</p>";
    }
    document.getElementById("fname").innerHTML = errorMessages;
    return errorMessages === "";
}

function lastName() {
    let lastname = document.getElementById("LastName").value;
    let errorMessages = "";
    if (!lastname || lastname.length > 20 || !/^[a-zA-Z ,.'-]+$/.test(lastname)) {
        errorMessages = "<p>Invalid last name. Must be letters only (max 20 characters).</p>";
    }
    document.getElementById("lname").innerHTML = errorMessages;
    return errorMessages === "";
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let errorMessages = "";
    if (!email.match(/^[^@]+@[^@]+\.(com|net|org)$/)) {
        errorMessages = "<p>Invalid email format.</p>";
    }
    document.getElementById("emailError").innerHTML = errorMessages;
    return errorMessages === "";
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let errorMessages = "";
    if (!/^[0-9-]{1,15}$/.test(phone)) {
        errorMessages = "<p>Invalid phone number. Numbers and dashes only (max 15 digits).</p>";
    }
    document.getElementById("phoneError").innerHTML = errorMessages;
    return errorMessages === "";
}

function validateUsername() {
    let username = document.getElementById("username").value;
    let errorMessages = "";
    if (username.length > 12) {
        errorMessages = "<p>Username must not exceed 12 characters.</p>";
    }
    document.getElementById("usernameError").innerHTML = errorMessages;
    return errorMessages === "";
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let errorMessages = "";
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/)) {
        errorMessages = "<p>Password must be 7 characters, with uppercase, lowercase, a number, and a special character.</p>";
    }
    document.getElementById("passwordError").innerHTML = errorMessages;
    return errorMessages === "";
}

function validateZipCode() {
    let country = document.getElementById("country").value;
    let zipcode = document.getElementById("zipcode").value;
    let errorMessages = "";
    if (country === "USA" && (!/^[0-9]{5}$/.test(zipcode))) {
        errorMessages = "<p>Invalid Zip Code. Must be 5 digits.</p>";
    }
    document.getElementById("zipError").innerHTML = errorMessages;
    return errorMessages === "";
}
