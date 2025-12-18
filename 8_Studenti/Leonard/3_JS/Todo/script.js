`use strict`;

const filterBtn = document.querySelector(`.btn--filter`);
const trashBtn = document.querySelector(`.btn--trash`);
const addBtn = document.querySelector(`.btn--add`);
const inputElement = document.querySelector(`.input-add`);
const tableBody = document.querySelector(`tbody`);
const toastElement = document.querySelector(`.toast`);
const toastMessage = document.querySelector(`.toast-message`);
const filterGroup = document.querySelector(`.filter-group`);
const filterAllBtn = document.querySelector(`.btn--all`);
const filterUnfinishedBtn = document.querySelector(`.btn--unfinished`);
const filterFinishedBtn = document.querySelector(`.btn--finished`);
const pagination = document.querySelector(`.pagination`);

let toDoTasks = [];
let displayedTasks;
let currentPage = 0;
let paginationButtonElements = [];
let crossBtns = [];
let filterState = `all`;

// DISPLAY TABLE DATA
const displayTableData = function () {
  if (displayedTasks.length === 0)
    tableBody.innerHTML = `<tr><td class="no-tasks-text">No tasks</td></tr>`;
  else tableBody.innerHTML = ``;
  displayedTasks.forEach((el, i) =>
    tableBody.insertAdjacentHTML(
      `beforeend`,
      `<tr>
        <td>${el.taskID}.</td>
        <td>${el.taskName}</td>
          <td>
            <button class="btn btn--check ${el.checked ? `checked` : ``}">
              <ion-icon name="checkmark-outline" class="checkmark-icon ${
                !el.checked ? `unchecked` : ``
              }"></ion-icon>
            </button>
          </td>
          <td>
            <button class="btn btn--cross">
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </td>
      </tr>`
    )
  );
};

// MARKING TASKS AS DONE
const markingTasksDone = function () {
  let checkMarkBtns = Array.from(document.querySelectorAll(`.btn--check`));
  let checkMarkIcons = Array.from(document.querySelectorAll(`.checkmark-icon`));
  checkMarkBtns.forEach((button, i) =>
    button.addEventListener(`click`, function () {
      if (toDoTasks.at(i + currentPage * 5).checked) {
        toDoTasks.at(i + currentPage * 5).checked = false;
        button.classList.remove(`checked`);
        checkMarkIcons.at(i).classList.add(`unchecked`);
      } else {
        toDoTasks.at(i + currentPage * 5).checked = true;
        button.classList.add(`checked`);
        checkMarkIcons.at(i).classList.remove(`unchecked`);
      }
    })
  );
};

// UPDATE UI
const updateUI = function (tasks) {
  let filteredTasks = tasks;
  if (filterState === `all`) filteredTasks = tasks;
  else if (filterState === `unfinished`)
    filteredTasks = tasks.filter((el) => !el.checked);
  else if (filterState === `finished`)
    filteredTasks = tasks.filter((el) => el.checked);

  // PAGINATION
  let pageNumbers = Math.ceil(filteredTasks.length / 5);
  let pages = Array.from({ length: pageNumbers }, (_, i) => i + 1);
  displayedTasks = filteredTasks.slice(5 * currentPage, 5 * currentPage + 5);
  if (pages.length > 1) {
    pagination.classList.remove(`hidden-pagination`);
  } else pagination.classList.add(`hidden-pagination`);
  pagination.innerHTML = ``;
  pages.forEach(function (el, i) {
    pagination.insertAdjacentHTML(
      `beforeend`,
      `<button class="btn btn--pagination">${pages.at(i)}</button>`
    );
  });

  // NAVIGATING PAGINATION
  paginationButtonElements = Array.from(
    document.querySelectorAll(`.btn--pagination`)
  );
  paginationButtonElements.forEach(function (el) {
    el.addEventListener(`click`, function () {
      currentPage = Number(el.textContent) - 1;
      displayedTasks = filteredTasks.slice(
        5 * currentPage,
        5 * currentPage + 5
      );
      displayTableData();
      markingTasksDone();
      removeTask();
    });
  });

  // DISPLAY DATA IN THE TABLE
  displayTableData();
  markingTasksDone();
  removeTask();
};

// REMOVING TASKS
function removeTask() {
  crossBtns = Array.from(document.querySelectorAll(`.btn--cross`));
  for (let i = crossBtns.length - 1; i >= 0; i--) {
    crossBtns.at(i).addEventListener(`click`, function () {
      toDoTasks.splice(i + currentPage * 5, 1);
      toDoTasks.map((el, i) => (el.taskID = i + 1));
      updateUI(toDoTasks);
    });
  }
}

// ADD TASKS
addBtn.addEventListener(`click`, function () {
  if (inputElement.value) {
    toDoTasks.push({
      taskID: toDoTasks.length + 1,
      taskName: inputElement.value,
      checked: false,
    });
    updateUI(toDoTasks);
    inputElement.value = ``;
  } else {
    toastElement.classList.remove(`hidden-toast`);
    setTimeout(() => toastElement.classList.add(`hidden-toast`), 3000);
  }
});

// CLEAR ALL
trashBtn.addEventListener(`click`, function () {
  toDoTasks = [];
  updateUI(toDoTasks);
});

// FILTER BUTTON DROPDOWN
filterBtn.addEventListener(`click`, function () {
  filterGroup.classList.toggle(`hidden-filters`);
});

filterAllBtn.addEventListener(`click`, function () {
  filterState = `all`;
  currentPage = 0;
  updateUI(toDoTasks);
});

filterUnfinishedBtn.addEventListener(`click`, function () {
  filterState = `unfinished`;
  currentPage = 0;
  updateUI(toDoTasks);
});

filterFinishedBtn.addEventListener(`click`, function () {
  filterState = `finished`;
  currentPage = 0;
  updateUI(toDoTasks);
});
