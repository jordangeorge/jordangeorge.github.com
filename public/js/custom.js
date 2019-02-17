function closeNewsletter() {
  document.getElementsByClassName("newsletter-container")[0].style.display = "none";
}

// if user has already closed the newsletter div, don't show message again
window.onload=function(){
  (function() {
    var visited = localStorage.getItem('visited');
    if (!visited) {
      document.getElementsByClassName("newsletter-container")[0].style.visibility = "visible";
      localStorage.setItem('visited', true);
    }
  })();
}
