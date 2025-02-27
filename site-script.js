// Navigation Bar Functionality
document.addEventListener("DOMContentLoaded", function () {
    function scrollTo(sectionID) {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView();
        } else {
            console.error(`Section with ID ${sectionID} not found!`)
        }
    }

    const navButtons = document.querySelectorAll(".individual-nav-bar");
    navButtons.forEach(function(button) {
        button.addEventListener("click", function (event) {
            const targetID = button.getAttribute("data-target");
            scrollTo(targetID);
        })
    })
});

const serviceContainer = document.querySelector(".service-container");

//Service Items Data
const serviceData = [
    {text: "Construction", icon: "construction-icon.png"},
    {text: "Consulting", icon: "consult-icon.png"},
    {text: "Engineering", icon: "engineering-icon.png"},
    {text: "Water Damage", icon: "water-damage.png"}
];

function createServiceItem(text, iconSrc) {
    console.log("createServiceItem")
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("service-item");

    const iconBox = document.createElement("div");
    iconBox.classList.add('icon-box');

    const icon = document.createElement("div");
    icon.classList.add('icon');

    const img = document.createElement("img");
    img.src = iconSrc;
    img. alt = text;
    img.loading = "lazy"

    icon.appendChild(img);
    iconBox.appendChild(icon);
    serviceItem.appendChild(iconBox);

    const textNode = document.createTextNode(text);
    serviceItem.appendChild(textNode);

    serviceContainer.appendChild(serviceItem);
    managePreviousItems()
}
let maxItems = 16;
let currentItems = 4; //Counter for items in service-container. 4 are in html code already
function managePreviousItems() { // acts as watcher for total items
    currentItems++
    console.log("incremented counter " + currentItems)
    if (currentItems > maxItems) {
        deletePreviousItems(4)
    }
}
function deletePreviousItems(count) {
    for (let i = 0; i < count; i++) {
        console.log("triggered deletion")
        serviceContainer.removeChild(serviceContainer.firstChild);
    }
    currentItems -= 4;
}
//Loads a given number (count) of service items 
function loadServiceItems(count) {
    for (let i = 0; i < count; i++) {
        //Random for testing purposes for now
        const randomIndex = Math.floor(Math.random() * serviceData.length);
        const service = serviceData[randomIndex];
        createServiceItem(service.text, service.icon);
    }
}
function checkScroll() {
    console.log("checkScroll")
    if (serviceContainer.scrollTop + serviceContainer.clientHeight >= serviceContainer.scrollHeight - 50) {
        loadServiceItems(3);
    }
}
//Buffer function to prevent to many checkScroll() calls
let debounceTimeout;
function debounce(func, wait) {
    return function() {
        clearTimeout(debounceTimeout); // Clears timeout if any
        debounceTimeout = setTimeout(func, wait); //Sets a new timeout
    }
}
const debouncedScroll = debounce(checkScroll, 200); //ms delay after user stops scrolling 
serviceContainer.addEventListener("scroll", debouncedScroll)