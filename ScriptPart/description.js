const arrays = document.getElementById("array");
let ua=[];
function descriptionAdder(index, height) {
  let li = document.createElement("li");
  li.className = "elements";
  li.innerText = parseInt(height) / 3;
  arrays.appendChild(li);
  //   console.log(li);
}

function descriptionRemover() {
  // console.log(arrays.innerHTML);
  // arrays.innerHtml = "";
ua=[];
const elements = document.querySelectorAll(".elements");

elements.forEach((element) => {
  ua.push(parseInt(element.innerText));
  element.remove();
});
// console.log(arrays.innerHTML);
}

function descriptionUpdater(foo){
  if(foo===1)
  {
     ua.sort(function (a, b) {
    return a - b;
  });
  }
  else{
         ua.sort(function (a, b) {
           return b - a;
         });
  }
 
  console.log(ua);
  for (let index = 0; index < ua.length; index++) {
    
    let li = document.createElement("li");
    li.className = "elements";
    li.innerText = ua[index] ;
    arrays.appendChild(li);
    console.log(typeof ua[index]);
  }
  console.log(arrays.innerHTML);
}