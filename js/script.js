function f() {
  if (window.location.protocol != "file:") return;
  links = document.getElementsByTagName("a");
  for (let link of links) link.href += ".html";
}

window.onload = f;
