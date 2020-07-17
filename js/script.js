const appendIfLocal = () => {
  //Guard Clause - If not locally hosted, don't run
  if (window.location.protocol != "file:") return;

  //append "index" to home links
  home = document.querySelectorAll(".homeLink");
  for (var i = 0; i < home.length; i++) home[i].href += "index";

  //append ".html" to all internal links
  l = document.querySelectorAll(
    ".nav-link, .dropdown-item, .navbar-brand, .internal"
  );
  for (var i = 0; i < l.length; i++) l[i].href += ".html";
};

window.onload = () => {
  //append relevant text to links to ensure functionality
  appendIfLocal();
};
