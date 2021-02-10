window.onload = () => {
  scrollEventListener();

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
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        img.classList.add("in-view");
        nav.classList.add("light");
      } else {
        nav.classList.remove("light");
      }
    });
  });

  headingObs.observe(header);
  topObs.observe(top);
};

function scrollEventListener() {
  $(".nav-link").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500
    );
  });
}
