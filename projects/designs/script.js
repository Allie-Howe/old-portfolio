//gets how many gifs are in each row & column - ASSUMES ALL ROWS ARE SAME SIZE
const gifDiv = document.getElementsByClassName("gifs"),
  gifRow = gifDiv[0].getElementsByClassName("gif"),
  allGifs = document.querySelectorAll(".gif");

const rows = gifDiv.length,
  cols = gifRow.length;

// Adjusts width & height of each gif based on how many rows & columns there are
allGifs.forEach((gif) => {
  gif.style.width = 100 / cols + "vw";
  gif.style.height = 100 / rows + "vh";
});
