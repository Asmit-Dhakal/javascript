
let runAgain = true;
const canDrive = (age) => {
  return age > 18 ? true : false;
}
while (runAgain) {
  let age = prompt("Enter age");
  age = Number.parseInt(age);

  if (canDrive(age)) {
    alert("you can  drive");
  }
  else {
    alert("underage");
  }
  runAgain = confirm("Do you want to run again ?");
}