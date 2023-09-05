document.addEventListener("DOMContentLoaded", function () {
    const dialImages = document.querySelectorAll(".dial-option");
    const dialImage = document.getElementById("dial");

    dialImages.forEach(function (option) {
        option.addEventListener("click", function () {
            const selectedDial = option.src;
            dialImage.src = selectedDial;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const insertImages = document.querySelectorAll(".insert-option");
    const insertImage = document.getElementById("insert");

    insertImages.forEach(function (option) {
        option.addEventListener("click", function () {
            const selectedInsert = option.src;
            insertImage.src = selectedInsert;
        });
    });
});


const dialPanel = document.getElementById('dial-panel');
const insertPanel = document.getElementById('insert-panel');
const dialButton = document.getElementById('dial-button');
const insertButton = document.getElementById('insert-button');

// Function to show the Dial panel and set the button's background color
function showDialPanel() {
    dialPanel.style.display = 'block';
    insertPanel.style.display = 'none';
    dialButton.style.borderBlockColor = 'blue';
    insertButton.style.borderBlockColor = '';
}

// Function to show the Insert panel and set the button's background color
function showInsertPanel() {
    insertPanel.style.display = 'block';
    dialPanel.style.display = 'none';
    insertButton.style.borderBlockColor = 'blue';
    dialButton.style.borderBlockColor = '';
}

// Show the Dial panel on page load
window.addEventListener('load', showDialPanel);

// Event listeners for the toggle buttons
dialButton.addEventListener('click', showDialPanel);
insertButton.addEventListener('click', showInsertPanel);

