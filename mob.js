let getcolor = () => {
  const x = Math.floor(Math.random() * 16777215);
  const randomcode = "#" + x.toString(16);
  document.body.style.backgroundColor = randomcode;
  console.log(randomcode);
  document.getElementById("colorinwriten").innerText = randomcode;
  // automatic copy to clip board
  navigator.clipboard.writeText(randomcode);
};
//Event call this is run on click event
document.getElementById("btn").addEventListener("click", getcolor);
//initial call this is run on pageload
getcolor();
