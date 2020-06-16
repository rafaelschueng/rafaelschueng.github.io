$(document).ready(() => {
  console.log("Home is Ready...")
  $(".blog-topic").on("mouseover", function () {
    let blog_postImageRelated = this.getAttribute("data-blog-post-image");
    $('#blog-post-related-image').css('background-image',`url("${blog_postImageRelated}")`);
    console.log(`url(${blog_postImageRelated})`)
  })
})