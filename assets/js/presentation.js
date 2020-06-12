//sleep
let sleep = (time) => new Promise ( resolve => setTimeout (resolve, time));


async function PresentationAnimation (interval) {

  
  let childs = document.getElementById("Presentation").children;
  
  $("#Presentation").animate({opacity:1}, {duration:750})
  await sleep(100);

  for(i = 0; i < childs.length; i++) {
    childs[i].style.display = "block"
    await sleep (interval)
    if(i === (childs.length - 1)){
      $("#About").css('display',"grid");
      $('#Topbar').css('display','inline-flex');
      //fade-out presentation
      $("#Presentation").animate({opacity:0}, {duration:1000});
      $("#Presentation").css("display", "none");
      await sleep(500);
      //fade-in about and topbar
      $('#About').animate({opacity:1},{duration:1000});
      $('#Topbar').animate({opacity:1},{duration:2000})
      //after all set body overflow
      $('body').css('overflow', 'auto')
    }
    childs[i].style.display = "none";
  }
  await sleep(100)
}

$(document).ready(() => {
  console.log("Ready...")

  //initialize all popover
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  //On start apresentation
  PresentationAnimation (1000);
})