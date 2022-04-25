var submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
//   e.preventDefault();

  var name = getInput("name");
  var email = getInput("email");
  var course = getInput("course");
  var department = getInput("department");
  var batch = getInput("batch");

  var atagdiv = document.querySelector("#ticket");
  var at = atagdiv.querySelector("a");

  at.click();
}

function getInput(id) {
  return document.getElementById(id).value;
}
