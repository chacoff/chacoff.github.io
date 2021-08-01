window.console = window.console || function(t) {};


if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
};


$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});