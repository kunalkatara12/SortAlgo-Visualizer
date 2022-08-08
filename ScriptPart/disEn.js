const bubbleSortButton = document.getElementsByClassName("bubbleSort")[0];
const selectionSortButton = document.getElementsByClassName("selectionSort")[0];
const heapSortButton = document.getElementsByClassName("heapSort")[0];
const mergeSortButton = document.getElementsByClassName("mergeSort")[0];
const insertionSortButton = document.getElementsByClassName("insertionSort")[0];
const quickSortButton = document.getElementsByClassName("quickSort")[0];
const newArray = document.getElementById("newArray");
const speedSlider = document.getElementById("barSpeedSlider");
const sizeSlider = document.getElementById("arrSizeSlider");

function disableSortingButton() {
  bubbleSortButton.disabled = true;
  selectionSortButton.disabled = true;
  mergeSortButton.disabled = true;
  insertionSortButton.disabled = true;
  quickSortButton.disabled = true;
  heapSortButton.disabled = true;
}
function enableSortingButton() {
  bubbleSortButton.disabled = false;
  selectionSortButton.disabled = false;
  mergeSortButton.disabled = false;
  insertionSortButton.disabled = false;
  quickSortButton.disabled = false;
  heapSortButton.disabled = false;
}
function disableSlider() {
  speedSlider.disabled = true;
  sizeSlider.disabled = true;
}
function enableSlider() {
  speedSlider.disabled = false;
  sizeSlider.disabled = false;
}
