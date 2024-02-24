function OnShowPassword() {
    var x = document.getElementById("Password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    return x;
  }

export default {
    OnShowPassword
}