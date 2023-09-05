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

document.addEventListener("DOMContentLoaded", function () {
    const caseImages = document.querySelectorAll(".case-option");
    const caseImage = document.getElementById("case");

    caseImages.forEach(function (option) {
        option.addEventListener("click", function () {
            const selectedCase = option.src;
            caseImage.src = selectedCase;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ringImages = document.querySelectorAll(".ring-option");
    const ringImage = document.getElementById("chapter");

    ringImages.forEach(function (option) {
        option.addEventListener("click", function () {
            const selectedRing = option.src;
            ringImage.src = selectedRing;
        });
    });
});


const dialPanel = document.getElementById('dial-panel');
const insertPanel = document.getElementById('insert-panel');
const casePanel = document.getElementById('case-panel');
const ringPanel = document.getElementById('ring-panel');


const caseButton = document.getElementById('case-button');
const dialButton = document.getElementById('dial-button');
const insertButton = document.getElementById('insert-button');
const ringButton = document.getElementById('ring-button');


// Function to show the Dial panel and set the button's background color
function showDialPanel() {
    dialPanel.style.display = 'block';
    insertPanel.style.display = 'none';
    casePanel.style.display = 'none';
    ringPanel.style.display = 'none';

    dialButton.style.borderBlockColor = 'blue';
    insertButton.style.borderBlockColor = '';
    caseButton.style.borderBlockColor = '';
    ringButton.style.borderBlockColor = '';
}

// Function to show the Insert panel and set the button's background color
function showInsertPanel() {
    insertPanel.style.display = 'block';
    dialPanel.style.display = 'none';
    casePanel.style.display = 'none';
    ringPanel.style.display = 'none';

    insertButton.style.borderBlockColor = 'blue';
    dialButton.style.borderBlockColor = '';
    caseButton.style.borderBlockColor = '';
    ringButton.style.borderBlockColor = '';
}

function showCasePanel() {
    casePanel.style.display = 'block';
    dialPanel.style.display = 'none';
    insertPanel.style.display = 'none';
    ringPanel.style.display = 'none';

    caseButton.style.borderBlockColor = 'blue';
    insertButton.style.borderBlockColor = '';
    dialButton.style.borderBlockColor = '';
    ringButton.style.borderBlockColor = '';
}

function showRingPanel() {
    casePanel.style.display = 'none';
    dialPanel.style.display = 'none';
    insertPanel.style.display = 'none';
    ringPanel.style.display = 'block';

    caseButton.style.borderBlockColor = '';
    insertButton.style.borderBlockColor = '';
    dialButton.style.borderBlockColor = '';
    ringButton.style.borderBlockColor = 'blue';
}

// Show the Dial panel on page load
window.addEventListener('load', showCasePanel);

// Event listeners for the toggle buttons
dialButton.addEventListener('click', showDialPanel);
insertButton.addEventListener('click', showInsertPanel);
caseButton.addEventListener('click', showCasePanel);
ringButton.addEventListener('click', showRingPanel);

