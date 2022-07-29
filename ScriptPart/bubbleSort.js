async function bubbleSortAscendingFunction() {
  const element = document.querySelectorAll(".bar");
  for (let i = 0; i < element.length - 1; i++) {
    for (let j = 0; j < element.length - i - 1; j++) {
      console.log(`Comparing ${i + 1}th and  ${j + 1}th bar`);
      element[j].style.background = "red";
      element[j + 1].style.background = "red";
      if (
        parseInt(element[j].style.height) >
        parseInt(element[j + 1].style.height)
      ) {
        console.log(`Swap  ${j+1}th  ${j+2}th bar`);
        await waitforme(delay);
        swap(element[j], element[j + 1],element.length);
      }
      element[j].style.background = "cyan";
      element[j + 1].style.background = "cyan";
    }
    element[element.length - 1 - i].style.background = "green";
  }
  for (let i = 0; i < element.length; i++) {
    await waitforme(delay);
    element[i].style.background = "yellow";
  }
}



async function bubbleSortDescendingFunction() {
  const element = document.querySelectorAll(".bar");
  for (let i = 0; i < element.length - 1; i++) {
    for (let j = 0; j < element.length - i - 1; j++) {
      console.log(`Comparing ${i + 1}th and  ${j + 1}th bar`);
      element[j].style.background = "red";
      element[j + 1].style.background = "red";
      if (
        parseInt(element[j + 1].style.height) >
        parseInt(element[j].style.height)
      ) {
        console.log(`Swap  ${j + 1}th  ${j + 2}th bar`);
        await waitforme(delay);
        swap(element[j], element[j + 1]);
      }
      element[j].style.background = "cyan";
      element[j + 1].style.background = "cyan";
    }
    element[element.length - 1 - i].style.background = "green";
  }
  for (let i = 0; i < element.length; i++) {
    await waitforme(delay);
    element[i].style.background = "yellow";
  }
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
  disableSortingButton();
  disableSlider();
  disableOrderBtn();
  if (foo === 1) {
    await bubbleSortAscendingFunction();
      descriptionRemover();
      descriptionUpdater(foo);
  } else {
    await bubbleSortDescendingFunction();
      descriptionRemover();
      descriptionUpdater(foo);
  }
//   descriptionRemover();
//  descriptionUpdater()
  enableSortingButton();
  enableSlider();
  enableOrderBtn();
  
});

// const element = document.querySelectorAll(".bar");
//  for (let index = 0; index < element.length - 1; index++) {
//    console.log(offset(element[index]).left + "px");
//  }