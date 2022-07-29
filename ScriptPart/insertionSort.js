async function insertionSortAscendingFunction() {
  console.log("In insertion()");
  const element = document.querySelectorAll(".bar");
  // color
  element[0].style.background = "green";
  for (let i = 1; i < element.length; i++) {
    console.log("In ith loop");
    let j = i - 1;
    let key = element[i].style.height;
    let tmp=element[i].innerText;
    // color
    element[i].style.background = "red";

    await waitforme(delay);

    while (j >= 0 && parseInt(element[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      // color
      element[j].style.background = "red";
      element[j + 1].style.height = element[j].style.height;
      element[j + 1].innerText = element[j ].innerText;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        element[k].style.background = "cyan";
      }
    }
    element[j + 1].style.height = key;
     // color
     element[j + 1].innerText=tmp;
     element[i].style.background = "green";
  }
    for (let i = 0; i < element.length; i++) {
      await waitforme(delay);
      element[i].style.background = "yellow";
    }
}

async function insertionSortDescendingFunction() 
{
     console.log("In insertion()");
     const element = document.querySelectorAll(".bar");
     // color
     element[0].style.background = "green";
     for (let i = 1; i < element.length; i++) {
       console.log("In ith loop");
       let j = i - 1;
       let key = element[i].style.height;
       let tmp = element[i].innerText;
       // color
       element[i].style.background = "red";

       await waitforme(delay);

       while (j >= 0 && parseInt(element[j].style.height) < parseInt(key)) {
         console.log("In while loop");
         // color
         element[j].style.background = "red";
         element[j + 1].style.height = element[j].style.height;
         element[j + 1].innerText = element[j].innerText;
         j--;

         await waitforme(delay);

         // color
         for (let k = i; k >= 0; k--) {
           element[k].style.background = "cyan";
         }
       }
       element[j + 1].style.height = key;
       // color
       element[j + 1].innerText = tmp;
       element[i].style.background = "green";
     }
     for (let i = 0; i < element.length; i++) {
       await waitforme(delay);
       element[i].style.background = "yellow";
     }
}

const insSortbtn = document.querySelector(".insertionSort");
insSortbtn.addEventListener("click", async function () {
  disableSortingButton();
  disableSlider();
  disableOrderBtn();
  if (foo === 1) {
    await insertionSortAscendingFunction();
          descriptionRemover();
          descriptionUpdater(foo);
  } else {
    await insertionSortDescendingFunction();
          descriptionRemover();
          descriptionUpdater(foo);
  }
  enableSortingButton();
  enableSlider();
  enableOrderBtn();
});



