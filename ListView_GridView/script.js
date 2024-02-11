function full() {
    document.getElementById("column1").style.width = "100%";
    document.getElementById("column2").style.width = "100%";
    document.getElementById("column3").style.width = "100%";
    document.getElementById("column4").style.width = "100%";
  }
  
  function towcolumn() {
    document.getElementById("column1").style.width = "50%";
    document.getElementById("column2").style.width = "50%";
    document.getElementById("column3").style.width = "50%";
    document.getElementById("column4").style.width = "50%";
  }
  function fourcolumn() {
    document.getElementById("column1").style.width = "25%";
    document.getElementById("column2").style.width = "25%";
    document.getElementById("column3").style.width = "25%";
    document.getElementById("column4").style.width = "25%";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 100) {
              scrollToTopBtn.style.display = "block";
          } else {
              scrollToTopBtn.style.display = "none";
          }
      });
  
      scrollToTopBtn.addEventListener("click", () => {
          // Scroll to the top of the page
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      });
  });