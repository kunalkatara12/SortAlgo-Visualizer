async function mergeAsc(ele, low, mid, high) {
  console.log("In merge()");
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let tmpLeft=new Array(n1);
  let tmpRight = new Array(n2);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    console.log("In merge left loop");
    console.log(ele[low + i].style.height + " at " + (low + i));
    // color
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
    tmpLeft[i] = ele[low + i].innerText;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    console.log("In merge right loop");
    console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
    tmpRight[i] = ele[mid + 1 + i].innerText;
  }
  await waitforme(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    console.log("In merge while loop");
    console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log("In merge while loop if");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }

      ele[k].style.height = left[i];
      ele[k].innerText = tmpLeft[i];
      i++;
      k++;
    } else {
      console.log("In merge while loop else");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k].style.height = right[j];
      ele[k].innerText = tmpRight[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = left[i];
      ele[k].innerText=tmpLeft[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = right[j];
     ele[k].innerText = tmpRight[j];
    j++;
    k++;
  }
}

async function mergeSortAscendingFunction(ele, l, r) {
  console.log("In mergeSortAscendingFunction()");
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSortAscendingFunction(ele, l, m);
  await mergeSortAscendingFunction(ele, m + 1, r);
  await mergeAsc(ele, l, m, r);
}



async function mergeDesc(ele, low, mid, high) {
  console.log("In merge()");
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let tmpLeft = new Array(n1);
  let tmpRight = new Array(n2);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    console.log("In merge left loop");
    console.log(ele[low + i].style.height + " at " + (low + i));
    // color
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
    tmpLeft[i] = ele[low + i].innerText;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    console.log("In merge right loop");
    console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
    tmpRight[i] = ele[mid + 1 + i].innerText;
  }
  await waitforme(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    console.log("In merge while loop");
    console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) >= parseInt(right[j])) {
      console.log("In merge while loop if");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }

      ele[k].style.height = left[i];
      ele[k].innerText = tmpLeft[i];
      i++;
      k++;
    } else {
      console.log("In merge while loop else");
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k].style.height = right[j];
      ele[k].innerText = tmpRight[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = left[i];
    ele[k].innerText = tmpLeft[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = right[j];
    ele[k].innerText = tmpRight[j];
    j++;
    k++;
  }
}

async function mergeSortDescendingFunction(ele, l, r) {
  console.log("In mergeSortDescendingFunction()");
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSortDescendingFunction(ele, l, m);
  await mergeSortDescendingFunction(ele, m + 1, r);
  await mergeDesc(ele, l, m, r);
}

async function colorY(ele)
{
      for (let i = 0; i < ele.length; i++) {
        await waitforme(delay);
        ele[i].style.background = "yellow";
      }
}

const merSortbtn = document.querySelector(".mergeSort");
merSortbtn.addEventListener("click", async function () {
    let ele = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(ele.length) - 1;
  disableSortingButton();
  disableSlider();
  disableOrderBtn();
  if (foo === 1) {
    await mergeSortAscendingFunction(ele,l,r);
          descriptionRemover();
          descriptionUpdater(foo);
    await colorY(ele);

} else {
    await mergeSortDescendingFunction(ele, l, r);
          descriptionRemover();
          descriptionUpdater(foo);
    await colorY(ele);
  }
  enableSortingButton();
  enableSlider();
  enableOrderBtn();
});