function JSValidate() {
    if (ValidateLastName() && ValidatePassword() && ValidateConfirmPassword() && ValidateFirstName() && ValidateConfirmEmail() && ValidateEmail() && ValidatePhoneNumber() && TestBirthday()) && PasswordsEqual() && EmailsEqual(){
        return true;
    }
    return false;
    
}
/*function validForm(Form) {
    var errs = Sys.Mvc.FormContext.getValidationForForm(Form).validate(document.getElementById("Form"));
    return (!(errs && errs.length));
}*/
function ValidateLastName() {
    var lastName = document.getElementById("LastName").value;
    var reg = /^[a-zA-Z]{2,}$/g;
    if (lastName === "") {
        alert("Last Name box is not filled in");
        return false;
    }
    else if (!reg.test(lastName)) {
        alert("Last Name format is invalid");
        return false;
    }
    else
    {
        return true;
    }
}
function ValidateFirstName() {
    var firstName = document.getElementById("FirstName").value;
    var reg = /^[a-zA-Z]{2,}$/g;
    if (firstName === "") {
        alert("First Name box is not filled in");
        return false;
    }
    else if (!reg.test(firstName)) {
        alert("First Name format is invalid");
        return false;
    }
    else {
        return true;
    }
}
function ValidatePassword() {
    var password = document.getElementById("Password").value;
    var reg = /^[A-z0-9]{2,}$/g;
    if (password === "") {
        alert("Password box is not filled in");
        return false;
    }
    else if (!reg.test(password)) {
        alert("Password must contain only numbers and letters");
        return false;
    }
    else
    {
        return true;
    }
}
function ValidateConfirmPassword() {//not functional, and also not necessary
    var cpassword = document.getElementById("PasswordConfirm").value;
    var reg = /^[A-z0-9]{2,}$/g;
    if (cpassword === "") {
        alert("Confirm password box is not filled in");
        return false;
    }
    else if (!reg.test(cpassword)) {
        alert("Confirm password must contain only numbers and letters");
        return false;
    }
    else {
        return true;
    }
}

function ValidateEmail() {
    var email = document.getElementById("Email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (email === "") {
        alert("Email box is not filled in");
        return false;
    }
    else if (!re.test(email)) {

        alert("Email is not in incorrect format (email@domain.com)")
        return false;
    }
    else {
        return true;
    }
}
function ValidateConfirmEmail() {
    var cemail = document.getElementById("ConfirmEmail").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (cemail === "") {
        alert("Confirm Email box is not filled in");
        return false;
    }
    else if (!re.test(cemail)) {

        alert("Confirm Email is not in incorrect format (email@domain.com)")
        return false;
    }
    else {
        return true;
    }
}
function ValidatePhoneNumber() {
    var num = document.getElementById("PhoneNumber").value;
    var re = /^[0-9]{10}$/g;
    if (num === "") {
        alert("Phone Number is not filled in");
        return false;
    }
    else if (!re.test(num)) {

        alert("Phone Number is in incorrect format, use numbers only")
        return false;
    }
    else {
        return true;
    }

}
function TestBirthday() {
    var num = document.getElementById("Birthday").value;
    var re = /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/g;
    if (num === "") {
        alert("Birthday is not filled in");
        return false;
    }
    else if (!re.test(num)) {

        alert("Birthday is in incorrect format (mm/dd/yyy)")
        return false;
    }
    else {
        return true;
    }
}
function NullAlertPassword() {
    if (document.getElementById("Password").value !== "") {
        return true;
    }
    else {
        alert("The Password field must contain input")
        return false;
    }
}
function NullAlertConfirmPassword() {
    if (document.getElementById("PasswordConfirm").value !== "") {
        return true;
    }
    else {
        alert("The Confirm Password field must contain input")
        return false;
    }
}
function NullAlertFirstName() {
    if (document.getElementById("FirstName").value !== "") {
        return true;
    }
    else {
        alert("The First Name field must contain input")
        return false;
    }
}
function NullAlertLastName() {
    if (document.getElementById("LastName").value !== "") {
        return true;
    }
    else {
        alert("The Last Name field must contain input")
        return false;
    }
}
function NullAlertEmail() {
    if (document.getElementById("Email").value !== "") {
        return true;
    }
    else {
        alert("The Email field must contain input")
        return false;
    }
}
function NullAlertConfirmEmail() {
    if (document.getElementById("ConfirmEmail").value !== "") {
        return true;
    }
    else {
        alert("The Confirm Email field must contain input")
        return false;
    }
}
function NullAlertBirthday() {
    if (document.getElementById("Birthday").value !== "") {//only way to validate is to check for no input, non functional
        return true;
    }
    else {
        alert("The Birthday field must contain input")
        return false;
    }
}
function NullAlertPhoneNumber() {
    if (document.getElementById("PhoneNumber").value !== "") {
        return true;
    }
    else {
        alert("The Phone Number field must contain input")
        return false;
    }
}

var check_match = function () {
    if (document.getElementById("Password").value === document.getElementById("PasswordConfirm").value) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "matching!";
    }
    else {
        document.getElementById("message").innerHTML = "not matching!";
        document.getElementById("message").style.color = "red";
    }
}
var check_match2 = function () {
    if (document.getElementById("Email").value === document.getElementById("ConfirmEmail").value) {
        document.getElementById("message2").style.color = "green";
        document.getElementById("message2").innerHTML = "matching!";
    }
    else {
        document.getElementById("message2").innerHTML = "not matching!";
        document.getElementById("message2").style.color = "red";
    }
}
function PasswordsEqual() {
    var pwd = document.getElementById("Password").value;
    var cpwd = document.getElementById("PasswordConfirm").value;
    if (pwd == cpwd) {
        return true;
    }
    else {
        alert("Your passwords must match!")
        return false;
    }
}
function EmailsEqual() {
    var email = document.getElementById("Email").value;
    var cemail = document.getElementById("ConfirmEmail").value;
    if (email == cemail) {
        return true;
    }
    else {
        alert("Your emails must match!")
        return false;
    }
}

/*$(document).ready(
    
    $('#regFirstName').change(function () {
        var fnRegex = /^[a-zA-Z]{2,}$/g;
        var firstNameValue = $('#regFirstName'.val());
        if (!fnRegex.test(firstNameValue)) {
            $('#regFirstName').css('border', 'red');
        }
        else {
            $('#regFirstName').css('border', 'green');
        }
    })
);*/
