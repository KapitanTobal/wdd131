let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        logo.src = 'byui-logo-white.png';
        // code for changes to colors and logo
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        logo.src = 'byui-logo-blue.webp';
        // code for changes to colors and logo
    }
}           
                    