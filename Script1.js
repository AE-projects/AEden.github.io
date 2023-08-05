// JavaScript source code
    // JavaScript code to handle loading and showing content
    window.addEventListener('load', function () {
      const loadingScreen = document.getElementById('loading-screen');
      const logoAnimation = document.getElementById('logo-animation');
      const mainContent = document.getElementById('main-content');

      // Function to hide the loading screen and show the main content
      function showMainContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
      }

      // Function to hide the video tag warning after 8 seconds
      function hideVideoWarning() {
        videoWarning.style.display = 'none';
      }

      // Add an event listener to check if the logo animation ends
      logoAnimation.addEventListener('ended', showMainContent);

      // Add a timed delay of 8 seconds in case the logo animation does not trigger the automatic switch
      setTimeout(showMainContent, 8000);

      // Hide the video tag warning after 8 seconds
      const videoWarning = document.querySelector('video::after');
      setTimeout(hideVideoWarning, 8000);
    });

//---------------------------------------------------------------------------------------------------//

const cookieBox = document.querySelector(".cookie-popup"),
    buttons = document.querySelectorAll("button");

//adds animation as the cookie prompt appears to the screen from the right
const executeCodes = () => {
    if (document.cookie.includes("codinglab")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");
            console.log("delete show");

            //if "Accept" button has been pressed
            if (button.id == "acceptBtn") {
                //set cookies to last 1 month. 60 = 1minute, 60 = 1hour, 24 = 1day, 30 = 30days
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
                document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
                console.log("done");
            }
    })
  })
};

//executeCodes funstion will be called on webpage load
window.addEventListener("load", executeCodes);



// JavaScript to toggle navigation menu
    function toggleMenu() {
            var x = document.getElementsByTagName("nav")[0];
    if (x.style.display === "block") {
        x.style.display = "none";
            } else {
        x.style.display = "block";
            }
}

//Java script to transition content on screen by scrolling down
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}
