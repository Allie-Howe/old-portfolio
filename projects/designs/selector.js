const PATH = "./assets";
const paths = [
  `${PATH}/C+L_new.gif`,
  `${PATH}/checkers.gif`,
  `${PATH}/ContCirc_new.gif`,
  `${PATH}/love.gif`,
  `${PATH}/snake.gif`,
  `${PATH}/triangles.gif`,
  // `${PATH}/recursive_squares.mp4`,
]
let pathIndex = 0;

const changePath = () => document.querySelector("#gifArea").src = paths[pathIndex];

window.onload = () => {
  changePath();
  document.querySelector("#gifArea").onclick = () => {
    pathIndex = (pathIndex + 1) % paths.length;
    changePath();
  }
}
