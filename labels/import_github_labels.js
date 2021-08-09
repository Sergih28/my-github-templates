// original code from https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4

function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll(".js-labels-list-item"))
    .forEach(function (element) {
      if (
        element.querySelector(".js-label-link").textContent.trim() ===
        label.name
      ) {
        flag = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-description-input").value =
          label.description;
        element.querySelector(".js-new-label-color-input").value =
          "#" + label.color;
        element.querySelector(".js-edit-label-cancel ~ .btn-primary").click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-description-input").value =
    label.description;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document.querySelector(".js-details-target ~ .btn-primary").disabled = false;
  document.querySelector(".js-details-target ~ .btn-primary").click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}

// --- (Replace [] with the content of the json file)
[].forEach(function (label) {
  addLabel(label);
});

