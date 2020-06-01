const appendToLinks = () => {
  try {
    //append "index" to home links
    home = document.querySelectorAll(".homeLink");
    for (var i = 0; i < home.length; i++) home[i].href += "index";

    //append ".html" to all links
    links = document.getElementsByTagName("a");
    for (let link of links) link.href += ".html";
  } catch (error) {
    console.log("There was an issue with appending to links:", error);
  }
};

window.onload = () => {
  //If locally hosted, append relevant text to links to ensure functionality
  if (window.location.protocol == "file:") appendToLinks();
};
