async function heapify(element, n, i) {
  var largest = i;
  var lC = 2 * i + 1;
  var rC = 2 * i + 2;
  console.log(lC, rC,largest)
  
  element[largest].style.background = "red";
  // await waitforme(delay);

   if (foo === 1) {
  if (
    lC < n &&
    parseInt(element[lC].style.height) > parseInt(element[largest].style.height)
    ) {
    largest = lC;
  }
  if (
    rC < n &&
    parseInt(element[rC].style.height) > parseInt(element[largest].style.height)
  ) {
    largest = rC;
  }
}
else
{
    if (
    lC < n &&
    parseInt(element[lC].style.height) < parseInt(element[largest].style.height)
    ) {
    largest = lC;
  }
  if (
    rC < n &&
    parseInt(element[rC].style.height) < parseInt(element[largest].style.height)
  ) {
    largest = rC;
  }

}
  if (largest != i) {
    swap(element[i], element[largest]);
    heapify(element, n, largest);
  }
  await waitforme(delay);
}

async function heapSort() {
  console.log("In HeapSort()");

  const element = document.querySelectorAll(".bar");
  const n = element.length;
  console.log(n);
  element[0].style.background = "green";
  for (var i = Math.floor(n / 2)-1; i >= 0; i--) {
    console.log('in build Heap')
    console.log(element[i].innerText);
    element[i].style.background = "aqua";

    await heapify(element, n, i);
    element[i].style.background = "green";
    
  }
  
  console.log(element.innerText)
  
  for (var i = n-1; i > 0 ; i--) {
    await waitforme(delay);
    
    element[i].style.background = "orange";
    console.log(element[0].innerText, element[i].innerText);
    swap(element[0], element[i]);
    
    await heapify(element, i, 0);
  }
  console.log(element.innerText)
}

async function colorYellow() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    await waitforme(delay);
    ele[i].style.background = "yellow";
  }
}
const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click',async function () {
    disableSortingButton();
    disableSlider();
    disableOrderBtn();
  //  await heapSort(foo);
   await heapSort();
     descriptionRemover();
     descriptionUpdater(foo);
   await colorYellow();

     enableSortingButton();
     enableSlider();
     enableOrderBtn();
})
