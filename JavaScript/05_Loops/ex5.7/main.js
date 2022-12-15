let obj = {
    name: "filip",
    dificulty: 8,
    mandatory: true    
}

for (let prop in obj){
    console.log(prop + " : " + obj[prop]);
}