var passCheck = function () {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cPassword").value;

  if (password === cpassword) {
    alert("Matches");
  } else {
    alert("Password dont match");
  }
}
