const createBtn = document.querySelector("#createBtn");
const input = document.querySelector("#input");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");
// for test of lists
const datas = [
  "have to code",
  "have to work",
  "have to learn",
  "have to earn money",
];

// function for creating li
const createLi = (text) => {
  //for id
  const dynamicId = "check" + Math.random();
  // ---------------
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  li.innerHTML = `
  <div class="form-check">
    <input type="checkbox" id="${dynamicId}" class="form-check-input" onchange="done(event)" />
    <label for="${dynamicId}" class="form-check-label">${text}</label>
  </div>
  <div class="btn-group">
    <button class="btn btn-sm btn-outline-dark del-btns"><i class="bi bi-trash3 pe-none"></i></button>
    <button class="btn btn-sm btn-outline-dark edit-btns" type="edit"><i class="bi bi-pencil pe-none"></i></button>
  </div>
  `;

  //   for edit double click
  li.addEventListener("dblclick", edit);
  // -------------

  return li;
};

// function for adding new li
const addList = () => {
  if (input.value.trim()) {
    lists.append(createLi(input.value));
    input.value = null;
    input.focus();
    count();
  } else {
    alert("input text is empty");
  }
};

// function for btn click
createBtn.addEventListener("click", addList);
// --------------
// function for enter
input.addEventListener("keyup", (event) => {
  //   console.log(event.keyCode); Enter = 12
  if (event.keyCode === 13) {
    addList();
  }
});

// function for delete li
const deleteLi = (event) => {
  //   console.log(event.target.parentElement);
  // console.log(event.target);
  // console.log(event.target.closest("li"));
  if (confirm("Are you sure to delete!")) {
    event.target.closest("li").remove();
    count();
  }
};

// function for edit innertext of li
const edit = (event) => {
  // console.log(event.target);
  const old = event.target.closest("li").querySelector(".form-check-label");
  if (confirm("Do you want to edit?")) {
    const newText = prompt("Edit it", old.innerText);
    if (newText && newText.trim()) {
      old.innerText = newText;
    }
    // console.log(old.innerText);
  }
};

// function for (if checked => line through label)
const done = (event) => {
  //   console.log(event.target.nextElementSibling);
  //   console.log(event.target.nextElementSibling.classList);
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  count();
};

datas.forEach((data) => lists.append(createLi(data)));

// for edit and delete btn

// this should not use because dynamic datas only affects and new li cann't affect
// [...lists.children].forEach((list) => {
//   list.querySelector(".del-btns").addEventListener("click", deleteLi);
//   list.querySelector(".edit-btns").addEventListener("click", edit);
// });

// event delegation
lists.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-btns")) {
    console.log("to delete");
    deleteLi(event);
  } else if (event.target.getAttribute("type") === "edit") {
    console.log("to edit");
    edit(event);
  }
});

// function for count
const count = () => {
  // fot totalCount
  const totalCount = lists.children.length;
  total.innerText = totalCount;
  // ---------
  // for done count
  const totalDoneCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  // console.log(totalDoneCount);
  doneTotal.innerText = totalDoneCount;
};

window.addEventListener("load", count);
