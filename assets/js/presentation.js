//sleep
let sleep = (time) => new Promise ( resolve => setTimeout (resolve, time));

async function PresentationAnimation (interval) {

  let screen = document.getElementById("presentation-screen");
  let childs = document.getElementById("presentation-words").children;
  
  $("#presentation-screen").animate({opacity:1}, {duration:500})
  await sleep(100);

  for(i = 0; i < childs.length; i++) {
    childs[i].style.display = "block"
    await sleep (interval)
    if(i === childs.length - 1){
      $("#presentation-screen").animate({opacity:0}, {duration:500})
      await sleep(500);
    }
    childs[i].style.display = "none"
  }
  await sleep(100)
  $("#presentation-screen").removeClass("d-flex").addClass("d-none")
  $("body").css("overflow","auto")
  $("#main-screen").animate({margin:0 ,opacity:1},{duration : 750})
}

$(document).ready(() => {
  console.log("Ready...")
  PresentationAnimation (1000);
})