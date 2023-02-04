function validateContactForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  if (name == "") {
    alert("Name is required");
    return false;
  }
  if (email == "") {
    alert("Email is required");
    return false;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Invalid email address");
    return false;
  }
  if (message == "") {
    alert("Message is required");
    return false;
  }
}
