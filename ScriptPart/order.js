let foo = 1;
function checkedORNot() {
  const asc = document.querySelector("#ascending");
  const desc = document.querySelector("#descending");
  if (asc.checked == true) {
    desc.checked = false;
    console.log(asc.value);
    foo = 1;
  } else {
    asc.checked = false;
    console.log(desc.value);
    foo = 0;
  }
}
function disableOrderBtn() {
  document.getElementById("ascending").disabled = true;
  document.getElementById("descending").disabled = true;
}
function enableOrderBtn() {
  document.getElementById("ascending").disabled = false;
  document.getElementById("descending").disabled = false;
}





