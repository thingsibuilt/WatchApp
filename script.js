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

