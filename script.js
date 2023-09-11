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
     const data = [
        {
            "name": "Pepsi",
            "imageUrl": "parts/bezel_inserts/pepsiInsert.png",
            "partUrl": "https://luciusatelier.com/collections/bezel-inserts/products/skx007-ceramic-bezel-insert-slope-pepsi-dual-time-swiss-made"
        },
        {
            "name": "Kermit",
            "imageUrl": "parts/bezel_inserts/kermitInsert.png",
            "partUrl": "https://luciusatelier.com/collections/bezel-inserts/products/skx013-aluminium-bezel-insert-slope-gmt-24h-sprite-black-green"
        },
        {
            "name": "Yellow White",
            "imageUrl": "parts/bezel_inserts/Yellow_White_Edit.png",
            "partUrl": "https://www.aliexpress.us/item/3256804948452764.html?spm=a2g0o.productlist.main.25.3a1c51e555y8rs&algo_pvid=7ca4d68d-1cb5-4918-a435-71c9c661f5fb&algo_exp_id=7ca4d68d-1cb5-4918-a435-71c9c661f5fb-12&pdp_npi=4%40dis%21USD%2122.11%2113.71%21%21%21160.00%21%21%40210323f716938773528973523e7d7e%2112000031799795761%21sea%21US%212780216976%21A&curPageLogUid=XpgPQ76pzkTd"
        }
    ];
    const bezelInsertOptions = document.getElementById('bezel-insert-options');

    data.forEach(item => {
        // Create a container for each image, name, and cart icon
        const container = document.createElement('div');
        container.classList.add('part-container'); // Add a CSS class for styling if needed

        // Create the image element
        const insertImage = document.createElement('img');
        insertImage.src = item.imageUrl;
        insertImage.alt = item.name;
        insertImage.classList.add('bezel-insert'); // Add a CSS class for styling if needed

        // Create a paragraph element for the name text
        const nameText = document.createElement('p');
        nameText.textContent = item.name;

        // Create a link for the part URL
        const partLink = document.createElement('a');
        partLink.href = item.partUrl;
        partLink.target = '_blank'; // Open in a new tab

        partLink.appendChild(nameText);

        // Add a click event listener to update the main image
        insertImage.addEventListener("click", function () {
            document.getElementById("main-image").src = insertImage.src;
        });

        // Append the image and paragraph (with cart icon, name, and link) to the container
        container.appendChild(insertImage);
        container.appendChild(partLink);

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

