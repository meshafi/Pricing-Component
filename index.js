// Get references to the toggle switch and basicPrice1 element
const toggleSwitch = document.getElementById("toggleSwitch");
const basicPrice1 = document.getElementById("basicPrice1");
const basicPrice2 = document.getElementById("basicPrice2");

const masterPrice1 = document.getElementById("masterPrice1");
const masterPrice2 = document.getElementById("masterPrice2");

const professionalPrice1 = document.getElementById("professionalPrice1");
const professionalPrice2 = document.getElementById("professionalPrice2");

// Function to toggle the display of basicPrice1 based on the toggle switch state
function toggleBasicPriceDisplay() {
  basicPrice1.style.display = toggleSwitch.checked ? "none" : "block";
  basicPrice2.style.display = toggleSwitch.checked ? "block" : "none";

  masterPrice1.style.display = toggleSwitch.checked ? "none" : "block";
  masterPrice2.style.display = toggleSwitch.checked ? "block" : "none";

  professionalPrice1.style.display = toggleSwitch.checked ? "none" :"block";
  professionalPrice2.style.display = toggleSwitch.checked ? "block" : "none";

}

// Add an event listener to the toggle switch
toggleSwitch.addEventListener("change", toggleBasicPriceDisplay);

// Initial call to set the display based on the initial state of the toggle switch
toggleBasicPriceDisplay();


