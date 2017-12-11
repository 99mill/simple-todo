var newTask = document.forms.newItemForm.newItem.value
var todo = document.querySelector('#todo');
var add = document.querySelector('#add');

// button to create new item
add.addEventListener('click', function(e) {
  e.preventDefault();
  newTask = document.forms.newItemForm.newItem.value

  if (newTask) {
    addItem();
  };
});

// create element function
function createElem(type, clvss, id, bool) {
  var elem;
  type ? elem = document.createElement(type) : null
  clvss ? elem.className = clvss : null
  id ? elem.id = id : null
  bool === true ? elem.setAttribute('aria-hidden', 'true') : null
  return elem;
};

// function to move item from one list to the other
function moveItem() {
  let currentList = this.parentNode.parentNode.id;
  let item = this.parentNode;
  let parent = this.parentNode.parentNode;
  let completed = document.querySelector('#completed');
  let checkbox = item.querySelector('#status').querySelector('i');
  let text = item.querySelector('#text');
  let edit = item.querySelector('#edit');

  if (currentList === 'todo') {
    parent.removeChild(item);
    completed.insertBefore(item, completed.childNodes[0]);

    checkbox.className = 'fa fa-check-square-o';
    text.className = 'strike';
    edit.style.display = 'none';

  } else {
    parent.removeChild(item);
    todo.insertBefore(item, todo.childNodes[0]);

    checkbox.className = 'fa fa-square-o';
    text.className = '';
    edit.style.display = 'block';
  };
};

// function to edit task description
function editItem() {
  let parent = this.parentNode;
  let taskDesc = parent.querySelector('#text');
  let editContainer = parent.querySelector('#editContainer');
  let clear = parent.querySelector('#clear');
  let edit = parent.querySelector('#edit');
  let accept = editContainer.querySelector('#accept');
  let reject = editContainer.querySelector('#reject');

  accept.addEventListener('click', acceptEdit);
  reject.addEventListener('click', rejectEdit);

  taskDesc.style.display = 'none';
  clear.style.display = 'none';
  edit.style.display = 'none';
  editContainer.style.display = 'inline';

};

// function to accept task edit
function acceptEdit() {
  let editContainer = this.parentNode;
  let item = this.parentNode.parentNode;
  let newTask = editContainer.querySelector('#editField').querySelector('#newText');
  let val = newTask.value;
  let taskDesc = item.querySelector('#text');
  let clear = item.querySelector('#clear');
  let edit = item.querySelector('#edit');

  if (val) {
    taskDesc.textContent = val;
    newTask.value = '';
    taskDesc.style.display = 'inline';
    clear.style.display = 'inline';
    edit.style.display = 'inline';
    editContainer.style.display = 'none';
  };
};

// function to reject edit
function rejectEdit() {
  let editContainer = this.parentNode;
  let item = this.parentNode.parentNode;
  let newTask = editContainer.querySelector('#editField').querySelector('#newText');
  let taskDesc = item.querySelector('#text');
  let clear = item.querySelector('#clear');
  let edit = item.querySelector('#edit');

  newTask.value = '';
  taskDesc.style.display = 'inline';
  clear.style.display = 'inline';
  edit.style.display = 'inline';
  editContainer.style.display = 'none';
};

// function to delete task
function deleteItem() {
  let item = this.parentNode;
  let parent = this.parentNode.parentNode;
  parent.removeChild(item);
};

// create new task
function addItem() {
  // new item
  var item = createElem('li', 'item', 'item');

  // task status
  var status = createElem('button', '', 'status');
  status.addEventListener('click', moveItem);
  var square = createElem('i', 'fa fa-square-o');
  square.setAttribute('aria-hidden', 'true');
  var checked = createElem('i', 'fa fa-checked-square-o hide');
  checked.setAttribute('aria-hidden', 'true');

  // task description
  var text = createElem('p', '', 'text');

  // edit task DIV
  var editContainer = createElem('div', '', 'editContainer');
  editContainer.style.display = 'none';
  var editField = createElem('p', '', 'editField');
  var newText = createElem('input', '', 'newText');
  var accept = createElem('button', '', 'accept');
  var acceptIcon = createElem('button', 'fa fa-check', '', true);
  var reject = createElem('button', '', 'reject');
  var rejectIcon = createElem('button', 'fa fa-times', '', true);

  // delete tast
  var clear = createElem('button', 'btn-rt clear', 'clear');
  clear.addEventListener('click', deleteItem);
  var trash = createElem('i', 'fa fa-trash-o', '', true);

  // edit task description
  var edit = createElem('button', 'btn-rt edit', 'edit');
  edit.addEventListener('click', editItem);
  var pencil = createElem('i', 'fa fa-pencil', '', true);

  // append new elements
  todo.insertBefore(item, todo.childNodes[0]);

  // append direct children of item
  item.appendChild(status);
  item.appendChild(text);
  item.appendChild(editContainer);
  item.appendChild(clear);
  item.appendChild(edit);

  // append children of edit div
  editContainer.appendChild(editField);
  editContainer.appendChild(accept);
  editContainer.appendChild(reject);

  // append input to p tag (text) of edit div (editContainer)
  editField.appendChild(newText);

  // append button icons
  status.appendChild(square);
  accept.appendChild(acceptIcon);
  reject.appendChild(rejectIcon);
  clear.appendChild(trash);
  edit.appendChild(pencil);

  // insert task description into p tag
  var newTask = document.forms.newItemForm.newItem.value;
  text.textContent = newTask;

  // clear new task desc
  document.forms.newItemForm.newItem.value = '';
};
