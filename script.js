import { CheckError } from "./modules/FormError.js";
import Resize from "./modules/Resize.js";
let canvasImg = document.getElementById("canvasImg");
let downloadBtn = document.getElementById("download");
let imgInput = document.getElementById("img-input");
let value = document.getElementById("value");
let range = document.getElementById("range");
let previewImg = document.getElementById("previewImg");
let copyEmail = document.getElementById("copy-email");
let image;
range.addEventListener("input", (e) => {
  valueUpdate(e.target.value);
});
function valueUpdate(n) {
  value.innerText = n + "%";
}
copyEmail.addEventListener("click", (e) => {
  let text = "salmanhossain11222626@gmail.com";
  copyEmail.innerText = 'copied'
  navigator.clipboard.writeText(text);
  setTimeout(() => {
    copyEmail.innerText = "copy email";
  }, 3000);
});
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (image == undefined) return;
  let fullForm, height, width, quality, maintain, heightError, widthError;
  heightError = document.getElementById("height-error");
  widthError = document.getElementById("width-error");
  heightError.innerText = "";
  widthError.innerText = "";
  fullForm = e.target;
  height = fullForm.height.value;
  width = fullForm.width.value;
  quality = parseInt(fullForm.quality.value);
  maintain = fullForm.maintain.value;
  let error = CheckError(height, width, heightError, widthError);
  if (error != true) return;
  Resize(height, width, maintain, quality, image, canvasImg, downloadBtn);
});
imgInput.addEventListener("change", (e) => {
  downloadBtn.innerHTML = "";
  let reader = new FileReader();
  image = e.target;
  reader.readAsDataURL(image.files[0]);
  reader.onload = (event) => {
    previewImg.src = event.target.result;
  };
});
