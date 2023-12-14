// 65130500007 จักรธร สอวิเศษ 
import { GuestManagement } from './lib/GuestManagement.js'

import { createGuestList } from './data/guestdata.js'
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList;

  // 1. register event for searching and adding
  function registerEventHandling() {
    document
      .getElementById("search-input")
      .addEventListener("keyup", searchGuest);
    document
      .getElementById("add-guest-btn")
      .addEventListener("click", addGuest);
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const firstname = guestItem.firstname;
    const lastname = guestItem.lastname;

    const guestElement = document.createElement("div");

    const spanNameElement = document.createElement("span");
    spanNameElement.textContent = `${firstname} ${lastname}`;

    const spanRemoveElement = document.createElement("span");
    spanRemoveElement.classList.add("remove-icon");
    spanRemoveElement.setAttribute("id", `${firstname}-${lastname}`);
    spanRemoveElement.style.cursor = "pointer";
    spanRemoveElement.style.color = "red";
    spanRemoveElement.textContent = "[X]";
    spanRemoveElement.addEventListener("click", removeGuest);

    guestElement.appendChild(spanNameElement);
    guestElement.appendChild(spanRemoveElement);

    document.getElementById("display-area").appendChild(guestElement);
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    Array.from(document.getElementById("display-area").children || []).forEach(
      (child) => child.remove()
    );

    guestResult.forEach((result) => {
      displayGuest(result);
    });
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const result = guests.searchGuests(event.target.value);
    displayGuests(result);
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstnameInput = document.getElementById("firstname-input");
    const lastnameInput = document.getElementById("lastname-input");
    const result = guests.addNewGuest(
      firstnameInput.value,
      lastnameInput.value
    );

    displayGuest(result[result.length - 1]);

    firstnameInput.value = "";
    lastnameInput.value = "";
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const name = event.target.getAttribute("id").split("-");
    guests.removeGuest({
      firstname: name[0],
      lastname: name[1],
    });
    event.target.parentElement.remove();
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  };
}
//module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())