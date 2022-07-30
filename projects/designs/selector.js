const PATH = "./assets";
const paths = [
  `${PATH}/C+L_new.gif`,
  `${PATH}/checkers.gif`,
  `${PATH}/ContCirc_new.gif`,
  `${PATH}/love.gif`,
  `${PATH}/snake.gif`,
  `${PATH}/triangles.gif`,
  `${PATH}/Plus_Squares.gif`,
]
const images = paths.map((path) => {const img = new Image();img.src = path;return img})

let pathIndex = Math.round(Math.random() * paths.length);

const changePath = () => document.querySelector("#gifArea").replaceChildren(images[pathIndex]);
const handleClick = () => {
  pathIndex = (pathIndex + 1) % paths.length;
  changePath();
  document.querySelector("#info").style.opacity = "0";
}
window.onload = () => {
  changePath();
  document.onclick = handleClick;
}
