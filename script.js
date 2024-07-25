document.addEventListener("DOMContentLoaded", function () {
    populateBezelInserts();

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

// Function to populate bezel insert options with image previews
async function populateBezelInserts() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/thingsibuilt/WatchApp/dev/bezelInserts.json'); // Replace with the correct path to your JSON file
        const data = await response.json();
        const bezelInsertOptions = document.getElementById('bezel-insert-options');

        data.forEach(item => {
            // Create a container for each image, name, and link
            const container = document.createElement('div');

            // Create the image element
            const insertImage = document.createElement('img');
            insertImage.src = item.imageUrl;
            insertImage.alt = item.name;
            insertImage.classList.add('bezel-insert'); // Add a CSS class for styling if needed

            // Create a paragraph element for the name text
            const nameText = document.createElement('p');

            // Create a link for the part URL
            const partLink = document.createElement('a');
            partLink.href = item.partUrl;
            partLink.textContent = item.name;
            nameText.appendChild(partLink);

            // Add a click event listener to update the main image
            insertImage.addEventListener("click", function () {
                document.getElementById("insert").src = insertImage.src;
            });

            // Append the image, name, and link to the container
            container.appendChild(insertImage);
            container.appendChild(nameText);

            // Append the container to the bezel insert options
            bezelInsertOptions.appendChild(container);
        });
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}





// Show the Dial panel on page load
window.addEventListener('load', showCasePanel);

// Event listeners for the toggle buttons
dialButton.addEventListener('click', showDialPanel);
insertButton.addEventListener('click', showInsertPanel);
caseButton.addEventListener('click', showCasePanel);
ringButton.addEventListener('click', showRingPanel);

