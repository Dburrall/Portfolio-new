const text = "Also I can make neat things"

let index = 0;

function writeText() {
   document.getElementsByClassName("jstext") = text.slice(0, index);
  
  index++
  
  if (index > text.length - 1){
    index= 0;
  }
}

setInterval(writeText, 100);