async function swap(el1, el2, n) {
  console.log("In swap()");  
  [el1.style.height,el2.style.height]=[el2.style.height,el1.style.height];
  [el1.innerText,el2.innerText]=[el2.innerText,el1.innerText];

}












