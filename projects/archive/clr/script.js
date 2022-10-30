window.onload = () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const top = document.querySelector("#top");
  const img = document.querySelector("#ss");

  let hasRun;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.target.tagName == "HEADER") {
          if (entry.isIntersecting) {
            nav.classList = "";
          } else {
            nav.classList += "scrolled";
          }
        } else if (entry.target.tagName == "SPAN" && !hasRun) {
          if (entry.isIntersecting) {
            img.classList = "ss";
          } else {
            hasRun = true;
            img.classList = "ss in-view";
          }
        }
      }),
    {}
  );

  observer.observe(header);
  observer.observe(top);
};
