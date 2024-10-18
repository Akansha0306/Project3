
  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

const popups= document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-btn');

function closeAllPopups() {
  popups.forEach(popup => {
    popup.classList.remove('show-popup');
  });
}
document.getElementById('filterButton').addEventListener('click', function() {
  closeAllPopups();
document.getElementById('filterPopup').classList.add('show-popup');
});
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    closeAllPopups();
  });
});




function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




const selectElement = document.getElementById('product');
const legalNoticePopup = document.getElementById('legal-notice-popup'); // Uncommented this line
const closeButton = document.querySelectorAll('.close-btn');

selectElement.addEventListener('change', function() {
  if (selectElement.value === 'issue-legal-notice') {
    legalNoticePopup.classList.add('show-popup');
  } else {
    legalNoticePopup.classList.remove('show-popup');
  }
});

closeButton.forEach(button => {
  button.addEventListener('click', function() {
    legalNoticePopup.classList.remove('show-popup'); // Changed 'closeAllPopups()' to removing 'show-popup' class from legalNoticePopup
  });
});


$(document).ready(function(){
  // Show the call popup when clicking on the element with ID "calling"
  $("#calling").click(function(e){
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    $("#calling").show(); // Show the call popup
  });

  // Hide the call popup when clicking outside of it
  $(document).click(function(e){
    if (!$(e.target).closest("#calling").length && !$(e.target).is("#calling")) {
      $("#calling").hide(); // Hide the call popup
    }
  });
});