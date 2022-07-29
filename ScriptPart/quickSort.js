async function partition(element, l, r) {
  console.log("In partition()");
  let i = l - 1;
  // color pivot element
  element[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    console.log("In partition for j");
    // color current element
    element[j].style.background = "yellow";
    // pauseChamp
    await waitforme(delay);
if(foo===1)
 {   if (parseInt(element[j].style.height) < parseInt(element[r].style.height  )) {
      console.log("In partition for j if");
      i++;
      swap(element[i], element[j]);
      // color
      element[i].style.background = "orange";

      if (i != j) element[j].style.background = "orange";
      // pauseChamp
      await waitforme(delay);
    } 
    else {
      // color if not less than pivot
      element[j].style.background = "pink";
    }}
    else{
           if (
             parseInt(element[j].style.height) >
             parseInt(element[r].style.height)
           ) {
             console.log("In partition for j if");
             i++;
             swap(element[i], element[j]);
             // color
             element[i].style.background = "orange";

             if (i != j) element[j].style.background = "orange";
             // pauseChamp
             await waitforme(delay);
           } else {
             // color if not less than pivot
             element[j].style.background = "pink";
           }
    }
  }
  i++;
  // pauseChamp
  await waitforme(delay);
  swap(element[i], element[r]); // pivot height one
  console.log(`i = ${i}`, typeof i);
  // color
  element[r].style.background = "pink";
  element[i].style.background = "green";

  // pauseChamp
  await waitforme(delay);

  // color
  for (let k = 0; k < element.length; k++) {
    if (element[k].style.background != "green") element[k].style.background = "cyan";
  }

  return i;
}

async function quickSortAscendingFunction(element, l, r,foo) {
  console.log("In quickSortAscendingFunction()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partition(element, l, r,foo);
    await quickSortAscendingFunction(element, l, pivot_index - 1);
    await quickSortAscendingFunction(element, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < element.length && r < element.length) {
      element[r].style.background = "green";
      element[l].style.background = "green";
    }
  }
}
async function quickSortDescendingFunction(element, l, r,foo) {
  console.log("In quickSortDescendingFunction()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partition(element, l, r,foo);
    await quickSortDescendingFunction(element, l, pivot_index - 1);
    await quickSortDescendingFunction(element, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < element.length && r < element.length) {
      element[r].style.background = "green";
      element[l].style.background = "green";
    }
  }
}
async function colorY(ele) {
  for (let i = 0; i < ele.length; i++) {
    await waitforme(delay);
    ele[i].style.background = "yellow";
  }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener("click", async function () {
  let element = document.querySelectorAll(".bar");
  let l = 0;
  let r = element.length - 1;
   disableSortingButton();
   disableSlider();
   disableOrderBtn();
   if (foo === 1) {
     await quickSortAscendingFunction(element,l,r,foo);
           descriptionRemover();
           descriptionUpdater(foo);
     await colorY(element);
    } else {
        await quickSortDescendingFunction(element,l,r,foo);
              descriptionRemover();
              descriptionUpdater(foo);
        await colorY(element);
   }
   enableSortingButton();
   enableSlider();
   enableOrderBtn();
});
