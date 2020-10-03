window.onload = () => {
  const header = document.querySelector("header"),
    nav = document.querySelector("nav"),
    top = document.querySelector("#top"),
    img = document.querySelector("#selfie");

  const IntObsOps = { heading: { rootMargin: "-80px 0px 0px 0px" } };

  const headingObs = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }),
    IntObsOps.heading
  );

  const topObs = new IntersectionObserver((entries) => {
    if (img.classList.contains("in-view")) return;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        img.classList.add("in-view");
      } else {
        img.classList.remove("in-view");
      }
    });
  });

  headingObs.observe(header);
  topObs.observe(top);
};
