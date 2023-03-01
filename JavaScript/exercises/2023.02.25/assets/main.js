window.onload = function () {
    const navLinks = document.querySelectorAll("#navList li");

    navLinks.forEach(link => {
        link.addEventListener("click", pageLoad);
    });

}

function pageLoad() {
    window.scrollTo({ top: 0 });

    let sectionID = this.textContent.toLocaleLowerCase();
      
    document.querySelectorAll("#navList li").forEach(link => {
        if (link.classList.contains("active")) {
            link.classList.remove("active");
        }
    });
    this.classList.add("active");

    document.querySelectorAll("main section").forEach(sec => {
        if (sec.id === sectionID) {
            sec.classList.remove("d-none");
        } else if (!sec.classList.contains("d-none")) {
            sec.classList.add("d-none");
        }
    });
}