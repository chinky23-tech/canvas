    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    function validateInput(event) {
      event.preventDefault(); // stop page reload
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!emailRegex.test(email)) {
        alert("Invalid Email! Please enter a valid one.");
        return false;
      } else if (!passwordRegex.test(password)) {
        alert(
          "Weak Password ❌\nPassword must have:\n- 1 uppercase letter\n- 1 number\n- 1 special character\n- Minimum 8 characters"
        );
        return false;
      } else {
        alert("Login successful ✅");
        return true;
      }
    }