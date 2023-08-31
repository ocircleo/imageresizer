function resize(height, width, maintain, quality, img, canvasImg, downloadBtn) {
  let reader = new FileReader();
  let getImg = img.files[0];
  reader.readAsDataURL(getImg);
  reader.onload = (event) => {
    let newImg = document.createElement("img");
    newImg.src = event.target.result;
    let mainImageHeight, mainImageWidth;
    mainImageHeight = newImg.height;
    mainImageWidth = newImg.width;
    newImg.onload = (e) => {
      let canvas = document.createElement("canvas");
      canvas.width = width;
      const context = canvas.getContext("2d");
      if (maintain == "crop") {
        canvas.height = height;
        canvas.width = width;
        context.drawImage(newImg, 0, 0, width, height, 0, 0, width, height);
      } else if (maintain == "aspect") {
        let ratio = width / newImg.width;
        canvas.width = width;
        canvas.height = newImg.height * ratio;
        context.drawImage(newImg, 0, 0, width, canvas.height);
      } else {
        canvas.height = height;
        canvas.width = width;
        context.drawImage(newImg, 0, 0, width, height);
      }
      let newImageUrl = context.canvas.toDataURL("image/jpeg", quality);
      canvasImg.src = newImageUrl;
      downloadBtn.innerHTML = "";
      let download = document.createElement("button");
      download.innerText = "download";
      download.classList.add("btn");
      download.addEventListener("click", (e) => {
        let ahref = document.createElement("a");
        ahref.href = newImageUrl;
        ahref.setAttribute("download", "resized");
        document.body.append(ahref);
        ahref.click();
        document.body.removeChild(ahref);
      });
      downloadBtn.append(download);
    };
  };
}
export default resize;
