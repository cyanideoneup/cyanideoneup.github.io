const wrapper = document.querySelector(".wrapper");
const sections = wrapper.querySelectorAll(".main > section");
const sideSections = document.querySelectorAll(".section_clone");

function addInView(index) {
  sideSections.forEach((sideSection) => {
    sideSection.classList.remove("inView");
  });
  sideSections[index].classList.add("inView");
}

function checkForViewport() {
  let result = 0;
  sections.forEach((section, index) => {
    const sectionBound = section.getBoundingClientRect();
    if (
      sectionBound.top <= window.innerHeight / 2 &&
      sectionBound.bottom > window.innerHeight / 2
    ) {
      result = index;
    }
  });
  return result;
}

window.addEventListener("scroll", () => {
  addInView(checkForViewport());
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
