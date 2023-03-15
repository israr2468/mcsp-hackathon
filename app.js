function setup() {
    const canvas = createCanvas(1080, 720);
    canvas.parent('canvas-container');
  }
  


  function myFunction(x) {
    x.classList.toggle("change");
  }



  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}