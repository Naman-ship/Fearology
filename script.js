const archiveButton = document.getElementById("archive-btn");
const archiveSection = document.getElementById("archives");

if (archiveButton && archiveSection) {

    archiveButton.addEventListener("click", function () {

        archiveSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}