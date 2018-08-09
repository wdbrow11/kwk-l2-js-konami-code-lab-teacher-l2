const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let keyStrokes = 0;

  document.body.addEventListener("keydown", (e) => {
    const key = e.key;
    
    if (codes[keyStrokes] === key){ 
      keyStrokes = keyStrokes + 1;
      } else {
        keyStrokes = 0;
      }
    
    if (keyStrokes === codes.length) {
      window.alert("Hurray!");
      keyStrokes = 0;
    }
  })
}

init();