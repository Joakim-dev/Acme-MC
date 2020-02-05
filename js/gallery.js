eventlisteners();
function eventlisteners() {
  const ui = new UI();

  // display modal
  const links = document.querySelectorAll(".work-item__icon");

  links.forEach(function(item) {
    item.addEventListener("click", function(event) {
      ui.showModal(event);
    });
  });

  // hide modal
  document
    .querySelector(".work-modal__close")
    .addEventListener("click", function() {
      ui.closeModal();
    });
}

function UI() {}

// Show Modal
UI.prototype.showModal = function(event) {
  event.preventDefault();
  if (event.target.parentElement.classList.contains("work-item__icon"));
  let id = event.target.parentElement.dataset.id;

  const modal = document.querySelector(".work-modal");
  const modalItem = document.querySelector(".work-modal__item");

  modal.classList.add("work-modal--show");
  modalItem.style.backgroundImage = `url(/img/gal-${id}.jpg)`;
};

// Hide Modal
UI.prototype.closeModal = function() {
  document.querySelector(".work-modal").classList.remove("work-modal--show");
};
