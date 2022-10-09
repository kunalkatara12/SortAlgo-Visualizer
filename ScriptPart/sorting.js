function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const SortButton = document.getElementsByClassName("btn-outline-primary");
function SortButtonClick() {
  for (let i = 0; i < SortButton.length; i++) {
    const element = SortButton[i];

    element.addEventListener("click", () => {
      for (let j = 0; j < SortButton.length; j++) {
        SortButton[j].disabled = true;
      }
    });
  }
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let arraySize = document.querySelector("#arrSizeSlider");
arraySize.addEventListener("input", function () {
  // console.log(arraySize.value, typeof arraySize.value);
  arrayUpdater(parseInt(arraySize.value));
});

let delay = 240;
// let speedSlider = document.querySelector("#barSpeedSlider");
let valueSpeedSlider = document.querySelector("#valSpeed");

document.querySelector("#barSpeedSlider").addEventListener("input", () => {
  delay = 320 - parseInt(document.querySelector("#barSpeedSlider").value);
  document.querySelector("#barSpeedSlider").oninput = function () {
    valueSpeedSlider.textContent = this.value;
  };
});

function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

// document.getElementById("newArray").addEventListener("click", arrayUpdater(Math.floor(Math.random() * 256) + 1));
// document
//   .getElementById("newArray")
//   .onclick(arrayUpdater(Math.floor(Math.random() * 256) + 1));
arrayUpdater(Math.floor(Math.random() * 49) + 1);

function arrayUpdater(noOfBars = 25) {
  deleteChild();
  descriptionRemover();
  let array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 70) + 1);
  }
  console.log(array);

  for (let index = 0; index < noOfBars; index++) {
    var bar = document.createElement("div"); //all bars have different height equal to respective array[index]
    bar.classList.add("bar");
    bar.innerText = index + 1;
    bar.style.fontSize = "8px";
    bar.style.minHeight = "15px";
    bar.style.height = `${array[index] * 3}px`; // giving triple height
    bar.style.width = "13px";
    bar.style.alignSelf = "centre";
    bar.style.backgroundColor = "yellow";
    bar.style.transform = `translateX(${index * 15}px)`;
    let element = document.getElementById("bars");
    element.appendChild(bar);
    descriptionAdder(index, bar.style.height);
  }
  enableSlider();
  enableSortingButton();
}

let valueSizeSlider = document.querySelector("#valSize");

arraySize.oninput = function () {
  valueSizeSlider.textContent = this.value;
};
