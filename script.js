document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnHighlight");

    btn.addEventListener("click", () => {
        document.querySelector(".container").classList.add("highlight");
    });
});
