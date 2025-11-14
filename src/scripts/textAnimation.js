const h1 = document.querySelector("h1");
const text = "CRISNET\nConectamos o mundo!";

text.split('').forEach((char, index) => {

  setTimeout(() => {
    h1.innerHTML += char === '\n' ? char + "<br>": char;  
  }, index * 150);

});