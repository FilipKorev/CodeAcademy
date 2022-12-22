let des = ["Strong", "Smart", "Fast", "Beautiful"];
function you(){
    console.log(prompt("whats your name?") + " " + des[Math.floor(Math.random() * 3)]);
}

you();