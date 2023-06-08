function RegisteR (){
var name = document.forms.Register.Name.value;
var email = document.forms.Register.Email.value;
var phone = document.forms.Register.Phone.value;
var password = document.forms.Register.pword.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
var regPhone=/^\d{10}$/;
var regName = /\d+$/g;
if (name == "" || regName.test(name)) {
    window.alert("Please enter your name properly.");
    name.focus();
    return false;
}
if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (password == "") {
    window.alert("Please enter your password");
    password.focus();
    return false;
}
if(password.length <6){
    window.alert("Password should be atleast 6 character long");
    password.focus();
    return false;

}
if (phone == "" || !regPhone.test(phone)) {
    window.alert("Please enter valid phone number.");
    phone.focus();
    return false;
}
return true;
}