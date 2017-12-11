var newTask = document.forms.newItemForm.newItem.value
var add = document.querySelector('#add');
// ADD ITEM BUTTON
add.addEventListener('click', function(e) {
  e.preventDefault();
  newTask = document.forms.newItemForm.newItem.value

  if(newTask) {
  addItem();
  };
});

// FUNCTION TO MOVE ITEM FROM ONE LIST TO THE OTHER
function moveItem() {
  let currentList = this.parentNode.parentNode.id;
  let item = this.parentNode;
  let parent = this.parentNode.parentNode;
  let completed = document.querySelector('#completed');
  let checkbox = item.querySelector('#status').querySelector('i');
  let text = item.querySelector('#text');
  let edit = item.querySelector('#edit');

  if(currentList === 'todo') {
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
  }
};

// FUNCTION TO EDIT ITEM
function editItem() {
  let parent = this.parentNode;
  let taskDesc = parent.querySelector('#text');
  let editContainer = parent.querySelector('#editContainer');
  let newText = editContainer.querySelector('#newText');
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

// FUNCTION TO ACCEPT EDIT
function acceptEdit(){
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
  }
};

// FUNCTION TO REJECT EDIT
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

// FUNCTION TO REMOVE TO DO ITEM FROM LIST
function deleteItem() {
  let item = this.parentNode;
  let parent = this.parentNode.parentNode;
  parent.removeChild(item);
};

// FUNCTION TO CREATE NEW TO DO ITEM
function addItem() {
  // CREATE ELEMENTS TO MAKE NEW TASK ITEM
  var item = document.createElement('li');
  item.id = 'item';
  item.classList.add('item');

  var status = document.createElement('button');
  status.id = 'status';

  // ADD EVENT LISTENER AND FUNCTIONALITY TO COMPLETION STATUS BUTTON
  status.addEventListener('click', moveItem);

  // TASK STATUS
  var square = document.createElement('i');
  square.classList.add('fa', 'fa-square-o');
  square.setAttribute('aria-hidden', 'true');

  var checked = document.createElement('i');
  checked.classList.add('fa', 'fa-check-square-o', 'hide');
  checked.setAttribute('aria-hidden', 'true');

  // TASK DESCRIPTION
  var text = document.createElement('p');
  text.id = 'text';

  // EDIT TASK DIV
  var editContainer = document.createElement('div');
  editContainer.id = 'editContainer';
  editContainer.style.display = 'none';

  var editField = document.createElement('p');
  editField.id = 'editField';

  var newText = document.createElement('input');
  newText.id = 'newText';

  // ACCEPT
  var accept = document.createElement('button');
  accept.id = 'accept';

  var acceptIcon = document.createElement('button');
  acceptIcon.classList.add('fa', 'fa-check');
  acceptIcon.setAttribute('aria-hidden', 'true');

  // REJECT
  var reject = document.createElement('button');
  reject.id = 'reject';

  var rejectIcon = document.createElement('button');
  rejectIcon.classList.add('fa', 'fa-times');
  rejectIcon.setAttribute('aria-hidden', 'true');

  // DELETE TASK BUTTON
  var clear = document.createElement('button');
  clear.id = 'clear';
  clear.classList.add('btn-rt', 'clear');

  var trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash-o');
  trash.setAttribute('aria-hidden', 'true');

  // ADD EVENTLISTENER AND FUNCTIONALITY TO DELETE BUTTON
  clear.addEventListener('click', deleteItem);

  // EDIT TASK BUTTON
  var edit = document.createElement('button');
  edit.id = 'edit';
  edit.classList.add('btn-rt', 'edit');

  var pencil = document.createElement('i');
  pencil.classList.add('fa', 'fa-pencil');
  pencil.setAttribute('aria-hidden', 'true');

  edit.addEventListener('click', editItem);

  var todo = document.querySelector('#todo');


  // APPEND NEWLY CREATED ELEMENTS
  // APPEND ENTIRE ITEM
  todo.insertBefore(item, todo.childNodes[0]);

  // APPEND CHILDREN OF THE ITEM
  item.appendChild(status);
  item.appendChild(text);
  item.appendChild(editContainer);
  item.appendChild(clear);
  item.appendChild(edit);

  // APPEND CHILDREN OF EDIT DIV
  editContainer.appendChild(editField);
  editContainer.appendChild(accept);
  editContainer.appendChild(reject);

  // APPEND INPUT TO P TAG OF EDIT DIV
  editField.appendChild(newText);

  // APPEND BUTTON ICONS
  status.appendChild(square);
  accept.appendChild(acceptIcon);
  reject.appendChild(rejectIcon);
  clear.appendChild(trash);
  edit.appendChild(pencil);

  // INSERT TEXT FROM INPUT TO P TAG OF NEW ITEM
  var newTask = document.forms.newItemForm.newItem.value;
  text.textContent = newTask;



};


































//
