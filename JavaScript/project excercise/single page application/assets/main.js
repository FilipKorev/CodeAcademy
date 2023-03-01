window.onload = function () {
    let navItems = document.querySelectorAll("#navList li")
    console.log(navItems);
    let images = [".//assets//img//image1.jpeg",".//assets//img//image2.jpeg"]

    if (document.getElementById("galery") === null) {
        // document.querySelector("main").innerHTML += 
        // "<section id='galery'><h2>Galery</h2></section>";

        document.querySelector("main").innerHTML += 
        `
        <section id="galery" class="d-none">
            <h2>"galery"</h2>
        </section>
        `;

        images.forEach(element => {
            document.querySelector("#galery").innerHTML +=
        `
        <img src="${img[element]}" alt="" />
        `
        });
    }





    navItems.forEach(li => {
        li.addEventListener("click", function () {
            console.log(this.textContent.toLowerCase());
            let sectionID = this.textContent.toLowerCase();
            console.log(document.getElementById("galery"));

           

            document.querySelectorAll("main section").forEach(sec =>{
                if (sec.id === sectionID) {
                    sec.classList.remove("d-none")
                }else{
                    if (!sec.classList.contains("d-none")) {
                        sec.classList.add("d-none")
                    }
                }

            })
        })
    });
}