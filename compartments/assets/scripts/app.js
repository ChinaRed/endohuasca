$(document).ready(function(){
  $(window).bind('pageshow', function(event) {
    if (event.originalEvent.persisted) {
        window.location.reload();
    }
  });
  // Toggles Nav Tray (Mobile)
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header_nav').toggleClass('open_tray');
    $('body').toggleClass('toggle_mask');
  });
    // Adds fade effect and waits for content to render to display content
    $(window).bind("unload", function() {});
    $("body").css("display", "none");
    $("body").hide();
    $("body").fadeIn(20);

    $('a').click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(20, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});


// Adds character limit on article summaries
$(".listing-summary").each (function () {
  if ($(this).text().length > 210)
    $(this).text($(this).text().substring(0,210) + '...   Read more');
});

  // Article Listing link that takes user to article detail view
$(".article").click(function(){
    window.location = $(this).find("a:first").attr("href");
    return false;
});

// Clears Contact fields form after submit
function clearFields(){
  setTimeout(function() {
    document.getElementById("contact-form").reset();
 }, 100);
}


// $(function() {

//     var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
//     $fluidEl = $("figure");

//   $allVideos.each(function() {

//     $(this)
//       // jQuery .data does not work on object/embed elements
//       .attr('data-aspectRatio', this.height / this.width)
//       .removeAttr('height')
//       .removeAttr('width');

//   });

//   $(window).resize(function() {

//     var newWidth = $fluidEl.width();
//     $allVideos.each(function() {

//       var $el = $(this);
//       $el
//           .width(newWidth)
//           .height(newWidth * $el.attr('data-aspectRatio'));

//     });

//   }).resize();
// });

//   $("#message_link").click(function(){
//    setTimeout(function() {
//        if (some_conditions){
//            document.getElementById("contact-form").reset();
//        }
//    }, 100);
// });

// $(document).ready(function () {

//   window.addEventListener('scroll', function(e){
//       var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//           shrinkOn = 80,
//           header = document.querySelector("header");
//           menu = document.querySelector(".menu-item");
//       if (distanceY > shrinkOn) {
//           $("header").addClass("condensed");
//           $(".menu-item").addClass("condensed");
//           console.log('menu');
//       } else {
//           if ($("header").has("condensed") && $(".menu-item").has("condensed")) {
//               $("header").removeClass("condensed");
//               $(".menu-item").removeClass("condensed");
//           }
//       }
//   });
// });

