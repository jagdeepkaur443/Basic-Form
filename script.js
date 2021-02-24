var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

var passCheck = function () {
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cPassword = document.getElementById("cPassword").value;

  if (fName == '' || lName == '' || email == '' ) {
    document.getElementById("alert").innerHTML = "Please fill out all fields";
    handleForm();
  }else if(password !== cPassword || password == ''){
    document.getElementById("alert").innerHTML = "Passwords dont match";
  } 
  else {
    alert("Form Submitted");
  }
}