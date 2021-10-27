function contacts()
{
  event.preventDefault();
//variables
let surname=document.getElementById("surname").value
let name=document.getElementById("name").value
let studentid=document.getElementById("studentid").value
let email=document.getElementById("email").value
let validate=true;
 if(surname.length < 10){
  alert("Input must contain 10 or more characters")
  validate=false;
 }
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 }
if(validateEmail(email)===false){
alert("Email invalid")
}
let contactObj = {
 surname,
  name,
  studentid,
  email,
};
if(validate){
  localStorage.setItem("contacts", JSON.stringify(contactObj));
}
return true;
}