async function swap(el1, el2, n) {
  console.log("In swap()");

  //old
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;

  var tmp = el1.innerText;

  el1.innerText =  parseInt(el2.innerText);
  el2.innerText =  parseInt(tmp);
}
















// new
/* 
   let pos1x = el1.getBoundingClientRect().x;
  let pos2x = el2.getBoundingClientRect().x;

  let pos1y = el1.getBoundingClientRect().y;
  let pos2y = el2.getBoundingClientRect().y;
  console.log(pos1x, pos2x, pos2y, pos1y);
  let animationLength=delay;
  if (pos2x>pos1x) {
      el1.setAttribute(
    "style",
    `transform: translate(${
      pos2x - pos1x
    }px, 0px); transition: transform 940ms;margin:15px`
  );
  await waitforme(delay);
  el2.setAttribute(
    "style",
    `transform: translate(${
      pos1x - pos2x
    }px, 0px); transition: transform 940ms;margin:15px`
  );
  } else {
         el1.setAttribute(
           "style",
           `transform: translate(${
              pos1x - pos2x
           }px, 0px); transition: transform 940ms;margin:15px`
         );
         await waitforme(delay);
         el2.setAttribute(
           "style",
           `transform: translate(${
            pos2x - pos1x
           }px, 0px); transition: transform 940ms;margin:15px`
         );
  }

  await waitforme(delay);
  // [el1,el2]=[el2,el1];
  el1.removeAttribute("style");
  el2.removeAttribute("style");



  // console.log(el1.getBoundingClientRect().x, el2.getBoundingClientRect().x);
  console.log("adlabadli function called");*/
