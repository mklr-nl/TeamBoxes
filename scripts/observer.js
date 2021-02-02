function countersObserv() {
  const sectionNum = document.querySelector(".Numbers");
  if (!sectionNum) {
    return;
  }
  // Observers
  const counters = document.querySelectorAll(".counter");
  // const sections = document.querySelectorAll('.Section');
  // const sectionNumbers = document.querySelector('.Section--numbers');

  const options = {
    root: null, //it is the viewpoint
    threshold: 1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        const speed = 1000; // The lower the slower

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
              counter.innerText = Math.round(count + inc);
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
              // here the animation is done
              // we could callback to signal it
            }
          };

          updateCount();
        });
      }
    });
  }, options);

  // observer.observe(sectionNumbers)
  observer.observe(sectionNum);
}

countersObserv();
