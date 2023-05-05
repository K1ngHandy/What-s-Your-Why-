// JavaScript

const myWhyText = document.getElementById("");
const myWhyButton = document.getElementById("");

myWhyButton.addEventListener("click", () => {
  myWhyText.classList.toggle("animate");
  
  if(myWhyText.classList.contains("animate")) {
    myWhyText.style.display = "block";
  }else {
    myWhyText.style.display = "none";
}
});