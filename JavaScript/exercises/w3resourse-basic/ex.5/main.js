// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 



let bla = "w3resource";
for (let i = 0; i < bla.length; i++) {
  bla = bla.slice(1) + bla[0];
  console.log(bla);
}