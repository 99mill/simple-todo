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
  let siblings = this.parentNode;
  let checkbox = siblings.querySelector('#status').querySelector('i');
  let text = siblings.querySelector('#text');
  let edit = siblings.querySelector('#edit');

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
  let oldText = parent.querySelector('#text');
  let newField = parent.querySelector('#editField');
  let newText = newField.querySelector('#newText');

  oldText.style.display = 'none';
  newField.style.display = 'inline';

}

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


  var square = document.createElement('i');
  square.classList.add('fa', 'fa-square-o');
  square.setAttribute('aria-hidden', 'true');

  var checked = document.createElement('i');
  checked.classList.add('fa', 'fa-check-square-o', 'hide');
  checked.setAttribute('aria-hidden', 'true');

  var text = document.createElement('p');
  text.id = 'text';


  var editField = document.createElement('p');
  editField.id = 'editField';
  editField.style.display = 'none';


  var newText = document.createElement('input');
  newText.id = 'newText';

  var clear = document.createElement('button');
  clear.id = 'clear';
  clear.classList.add('btn-rt', 'clear');

  // ADD EVENTLISTENER AND FUNCTIONALITY TO DELETE BUTTON
  clear.addEventListener('click', deleteItem);

  var trash = document.createElement('i');
  trash.classList.add('fa', 'fa-trash-o');
  trash.setAttribute('aria-hidden', 'true');

  var edit = document.createElement('button');
  edit.id = 'edit';
  edit.classList.add('btn-rt', 'edit');

  var pencil = document.createElement('i');
  pencil.classList.add('fa', 'fa-pencil');
  pencil.setAttribute('aria-hidden', 'true');

  edit.addEventListener('click', editItem);

  var todo = document.querySelector('#todo');


  // APPEND NEWLY CREATED ELEMENTS
  todo.insertBefore(item, todo.childNodes[0]);

  item.appendChild(status);
  item.appendChild(text);
  item.appendChild(editField);
  item.appendChild(clear);
  item.appendChild(edit);

  editField.appendChild(newText);
  status.appendChild(square);
  clear.appendChild(trash);
  edit.appendChild(pencil);


  // INSERT TEXT FROM INPUT TO P TAG OF NEW ITEM
  var newTask = document.forms.newItemForm.newItem.value;
  text.textContent = newTask;



};






































//
