function validateCheckBox() {
  if (document.getElementById("checkbox").checked) {
    document.getElementById("submit").disabled=false;
  } else {
    document.getElementById("submit").disabled=true;
  }
}
