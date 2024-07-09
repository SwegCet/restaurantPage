export function loadHomePage() {
    //Select content div
    const content = document.querySelector('#content');

    //then create the elements here
    //"HEADER" outside text-box
    const h1 = document.createElement('h1');
    h1.textContent = 'Kokpan Ramen Bar';

    //textbox element to contain paragraphs
    const textBox = document.createElement('div');
    textBox.className = 'textbox';

    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Welcome to Kopkan Ramen Bar';
    welcomeMessage.className = 'welcome';
    const intro = document.createElement('div');
    intro.textContent = 'Asian Fusion Experience located in the Bay Area';
    intro.className = 'intro';
    //APPEND THE CONTENT
    textBox.appendChild(welcomeMessage);
    textBox.appendChild(intro);

    content.appendChild(h1);
    content.appendChild(textBox);
};