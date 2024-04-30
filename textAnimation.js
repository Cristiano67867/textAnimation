export function textAnimation(txt, eleHtml, time) {
  txt.split('').forEach((index, times) => {
    
    setInterval(() => {
      eleHtml.innerHTML += index;
      
    }, times * time);
  });
}