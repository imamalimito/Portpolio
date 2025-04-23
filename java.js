// JavaScript code for interactivity on the first page
document.addEventListener("DOMContentLoaded", () => {
    const aboutMeButton = document.getElementById("aboutMeButton");
    const aboutMeContent = document.getElementById("aboutMeContent");

    aboutMeButton.addEventListener("click", () => {
        aboutMeContent.style.display = aboutMeContent.style.display === "none" ? "block" : "none";
    });
});
// JavaScript code for interactivity on the second page
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", () => {
            const description = project.querySelector(".description");
            description.style.display = description.style.display === "none" ? "block" : "none";
        });
    });
});