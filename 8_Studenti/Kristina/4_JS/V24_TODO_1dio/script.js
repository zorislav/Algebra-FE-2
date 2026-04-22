(function () {
  var allButton = document.querySelector("#button-all");
  var activeButton = document.querySelector("#button-active");
  var completedButton = document.querySelector("#button-completed");
  var addButton = document.querySelector("#input-add");
  var input = document.querySelector("#input-text");
  var list = document.querySelector("ul");
  var clearAllComlpetedButton = document.querySelector("#btn-clear-completed");

  function Todo() {
    function addListItem() {
      var text = input.value;

      if (text.trim().lenght !== 0) {
        var newItem = createListItem(text);
        list.appendChild(newItem);
      } else {
        alert("Please enter todo!");
      }
    }

    function createListItem(text) {
      var listItem = document.querySelector("ul");
      var div = document.createElement("div");

      div.classList.add("li-container");

      var intDiv = document.createElement("div");
      intDiv.classList.add("li-container-int");
      intDiv.innerText = text;
      addCheckBox(intDiv);
      div.appendChild(intDiv);
      addRemoveButton(div);
      listItem.appendChild(div);

      return listItem;
    }
    function addCheckBox(item) {
      var checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      item.insertBefore(checkBox, item.firstChild);
    }
    function addRemoveButton(item) {
      var removeButton = document.createElement("div");
      removeButton.innerText = "X";
      removeButton.className = "remove-button";
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

    function showAll() {
      var listItems = list.getElementsByTagName("li");
      for (var i = 0; i < listItems.length; i++) {
        listItems[i].style.display = "";
      }
      allButton.disabled = true;
      activeButton.disabled = falses;
      completedButton.disabled = false;
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
        allButton.disabled = false;
        activeButton.disabled = true;
        completedButton.disabled = false;
      }
    }
    function showCompleted() {
      var listItems = list.getElementsByTagName("li");
      for (var i = 0; i < listItems.length; i++) {
        var check = listItems[i].getElementsByTagName("input");
        if (check[0].checked) {
          listItems[i].style.display = "none";
        } else {
          listItems[i].style.display = "";
        }
        allButton.disabled = false;
        activeButton.disabled = false;
        completedButton.disabled = true;
      }
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
      completedButton.addEventListener("click", showCompleted);
      allButton.addEventListener("click", showAll);
      clearAllComlpetedButton.addEventListener("click", removeAllCompleted);
    };
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  var todo = new Todo();

  window.addEventListener("load", todo.init());
})();
