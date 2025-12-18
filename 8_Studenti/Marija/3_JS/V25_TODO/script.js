/**
 * Todo_namespace - anonimna samopozivajuća funkcij
 *
 * @namespace Todo_namespace
 * @author Marija
 */

(function () {
  /**
   * Todo - predstavlja objekt zadatka
   *
   * @name Todo
   * @class
   * @constructor
   * @memberof Todo_namespace
   */
  function Todo() {
    var addButton = document.querySelector("#input-add");
    var input = document.querySelector("#input-text");
    var list = document.querySelector("ul");
    var allButton = document.querySelector("#button-all");
    var activeButton = document.querySelector("#button-active");
    var completedButton = document.querySelector("#button-completed");
    var clearCompletedButton = document.querySelector(
      "#button-clear-completed"
    );

    function addListItem() {
      var text = input.value;
      if (text.trim().length !== 0) {
        var newItem = createListItem(text);
        list.appendChild(newItem);
        input.value = "";
      } else {
        alert("Please enter todo");
      }
    }

    /**
     *
     * createListItem - kreira novi zadatak - list item element
     *
     * @name createListItem
     * @function
     * @memberof Todo_namespace.Todo
     * @param {string} text Tekst zadatka
     * @returns {HTMLElement}
     */

    function createListItem(text) {
      var listItem = document.createElement("li");
      var div = document.createElement("div");
      div.classList.add("li-container");
      var intDiv = document.createElement("div");
      intDiv.classList.add("li-container-int");
      intDiv.innerText = text;
      addCheckbox(intDiv);
      div.appendChild(intDiv);
      addRemoveButton(div);
      listItem.appendChild(div);
      return listItem;
    }

    function addCheckbox(item) {
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.addEventListener("click", checkListItem);
      item.insertBefore(checkbox, item.firstChild);
    }

    function addRemoveButton(item) {
      var removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "removeButton";
      removeButton.addEventListener("click", removeListItem);
      item.appendChild(removeButton);
    }

    function checkListItem(event) {
      var checkBox = event.target;
      if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = "line-through";
      } else {
        checkBox.parentNode.style.textDecoration = "";
      }
    }

    function removeListItem(event) {
      var removeButton = event.target;
      removeButton.parentNode.parentNode.remove();
    }

    function showActive() {
      var listItems = list.getElementsByTagName("li");
      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }
      allButton.disabled = false;
      activeButton.disabled = true;
      completedButton.disabled = false;
    }

    function showAll() {
      var listItems = list.getElementsByTagName("li");
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = "";
      }
      allButton.disabled = true;
      activeButton.disabled = false;
      completedButton.disabled = false;
    }

    function showCompleted() {
      var listItems = list.getElementsByTagName("li");
      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (!check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
      }

      allButton.disabled = false;
      activeButton.disabled = false;
      completedButton.disabled = true;
    }

    function removeAllCompleted() {
      var listItems = list.getElementsByTagName("li");
      for (var i = listItems.length - 1; i >= 0; i--) {
        var check = listItems[i].getElementsByTagName("input");
        if (check[0].checked) {
          listItems[i].remove();
        }
      }
    }

    this.addListeners = function () {
      addButton.addEventListener("click", addListItem);
      activeButton.addEventListener("click", showActive);
      allButton.addEventListener("click", showAll);
      completedButton.addEventListener("click", showCompleted);
      clearCompletedButton.addEventListener("click", removeAllCompleted);
    };
  }

  var todo = new Todo();
  Todo.prototype.init = function () {
    this.addListeners();
  };

  window.addEventListener("load", todo.init());

  // document.addEventListener("DOMContentLoaded", ...);
})();
