 function CheckError(height, width, heightError, widthError) {
  if (isNaN(height))
    return (heightError.innerText =
      "error : Height must only include number (example: 2000). Remove px or any other text ");

  if (isNaN(width))
    return (widthError.innerText =
      "error : width must only include number (example: 2000). Remove px or any other text ");

  if (height <= 0)
    return (heightError.innerText = "height must be greeter then 0");

  if (width <= 0)
    return (widthError.innerText = "width must be greeter then 0");
 return true;
}

export {CheckError}