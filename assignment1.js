const INITIAL_MESSAGES = JSON.stringify ({
  messages: [
    "hello world",
    "This is an initial message",
    "I don't know what other messages to write"
  ]
});

function addInitialMessages() {
  var messages = JSON.parse(INITIAL_MESSAGES).messages;
  var list = document.getElementById("list-of-messages");
  for (var i = 0; i < messages.length; i++) {
    addListItem(messages[i], list);
  }
}

function addMessage() {
  var list = document.getElementById("list-of-messages");
  var messageToAdd = document.getElementById("message-input").value;
  addListItem(messageToAdd, list);
  document.getElementById("message-form").reset();
}

function addListItem(itemString, list) {
  var newListItem = document.createElement("li");
  newListItem.appendChild(document.createTextNode(itemString));
  newListItem.className = "fade-in bounce single-message";
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("onclick", "deleteMessage(this.parentNode)")
  deleteButton.className = "remove-list-item-button";
  deleteButton.appendChild(document.createTextNode("X"));
  newListItem.appendChild(deleteButton);
  list.appendChild(newListItem);
}

function deleteMessage(toDelete) {
  var parent = toDelete.parentNode;
  parent.removeChild(toDelete);
}

function clearMessages() {
  document.getElementById("list-of-messages").innerHTML = '';
}
