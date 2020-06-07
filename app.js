// const colors = ['red', 'green', 'brown', 'orangered','red','pink', 'blue', 'green'];

// const button  = document.getElementById('btn');
// const body = document.querySelector('body');
// const newColor = document.getElementById('newColor');

// body.style.backgroundColor = "red";
// button.addEventListener('click', changeBackground )
//     function changeBackground() {
//     const colorIndex = Math.floor(Math.random()*colors.length);
//     body.style.backgroundColor = colors[colorIndex];
//     newColor.innerHTML = colors[colorIndex];
//   }

const color = ["red", "green", "pink"];

const button = document.getElementById('btn');
const body = document.querySelector('body');

button.addEventListener('click', changeBackground) 

function changeBackground(){
  const colorIndex  = Math.floor(Math.random()*color.length);
  body.style.backgroundColor = color[colorIndex];
}




