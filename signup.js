const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validateInput() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!emailRegex.test(email)) {
    alert("Invalid Email!");
  } else if (!passwordRegex.test(password)) {
    alert("password not strong!");
  } else {
    alert("All good ✅");
  }
}