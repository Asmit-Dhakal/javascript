
let runAgain = true;
const canDrive = (age) => {
  return age > 18 ? true : false;
}
while (runAgain) {
  let age = prompt("Enter age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Please enter valid age ");
    break;
  }
  if (canDrive(age)) {
    alert("you can  drive");
  }
  else {
    alert("underage");
  }
  runAgain = confirm("Do you want to run again ?");
}