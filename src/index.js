import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

Controller();

function Controller() {
    let currentTab = loadHome();

    // Select all the navigation buttons
    const navButtons = document.querySelectorAll('button');

    // Add an event listener to all the navigation buttons.
    navButtons.forEach((element) => element.addEventListener('click', toggleTab));

    function toggleTab(event) {
        // Remove all the nodes in the current tab
        const children = Array.from(currentTab.children);
        children.forEach((element) => element.remove());

        // Get the text content of the button that was clicked.
        const target = event.target.innerText;

        if (target == 'Contact') {
            currentTab = loadContact();
        }
        else if (target == 'Menu') {
            currentTab = loadMenu();
        }
        else {
            currentTab = loadHome();
        }
    }
}
