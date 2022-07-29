let mode = document.body.style.backgroundColor;
const toggleMode = () => {
  if (mode === "light") {
   mode="dark";
    document.body.style.backgroundColor = "rgb(43, 45, 46)";
    document.getElementById("heading").style.color = "rgb(29, 255, 29)";
    document.getElementsByTagName("nav")[0].style.color =
      "rgba(8, 255, 8, 0.952)";
      document.getElementById("newArray").style.color = "rgb(54, 255, 14)";
      
  } else {
    mode="light";
    document.body.style.backgroundColor = "rgb(218, 209, 209)";
    document.getElementById('heading').style.color="black";
     document.getElementsByTagName("nav")[0].style.color =
       "black";
       document.getElementById("newArray").style.color = "rgb(5,6,99)";
  }
};



